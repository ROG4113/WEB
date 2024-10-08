'use strict';

class Workout {
    date = new Date();
    id = (Date.now() + ' ').slice(-10);
    clicks=0;

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    };
    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    };

    _click(){
        this.clicks++;
    };
};

class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.type = 'running';
        this.calPace();
        this._setDescription();
    };

    calPace() {
        this.pace = this.duration / this.distance;
    };
};

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.type = 'cycling';
        this.calcSpeed();
        this._setDescription();
    };

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60); //km/h
    }
};

// const run1=new Running([28, 77], 10, 90, 150);
// const cycling1=new Cycling([28, 77], 10, 60, 520);
// console.log(run1, cycling1);

///////////////////////////////////////// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapZoomLevel=13;
    #mapEvent;
    #workouts = [];

    constructor() {
        //get user position
        this._getPosition();

        //get data from local storage
        this._getLocalStorage();

        //Event handlers
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    };

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function () {
                    console.log('Could not get your location');
                });
    };

    _loadMap(position) {
        console.log(position);
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];
        console.log(latitude, longitude);

        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);


        this.#map.on('click', this._showForm.bind(this));

        this.#workouts.forEach(work=>this._renderWorkoutMarker(work));
    };

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideForm() {
        //empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        inputType.value = 'running';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);
    }

    _toggleElevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault(e);

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        //get data rom form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        //create running/cycling object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (!validInputs(cadence, duration, distance)) {
                return alert('Inputs have to be positive numbers!');
            }
            workout = new Running([lat, lng], distance, duration, cadence);
        }
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if (!validInputs(elevation, duration, distance) || !allPositive(duration, distance)) {
                return alert('Inputs have to be positive numbers!');
            }
            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        //add new object to workout array
        this.#workouts.push(workout);
        console.log(this.#workouts);

        //render workout marker
        this._renderWorkoutMarker(workout);

        //render workout on list
        this._renderWorkout(workout);

        //hide and clear inputs
        this._hideForm();

        //set local storage to all workouts
        this._setLocalStorage();
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
            .bindPopup(L.popup({
                maxwidth: 225,
                minwidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
            }))
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
            .openPopup();
    };

    _renderWorkout(workout) {
        let html = ` 
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
        `;

        if (workout.type === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>
            `;
        };

        if (workout.type === 'cycling') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
            `;
        };

        form.insertAdjacentHTML('afterend', html);
    };

    _moveToPopup(e){
        const workoutEl=e.target.closest('.workout');

        if(!workoutEl) return;

        const workout=this.#workouts.find(work=>work.id===workoutEl.dataset.id);
        console.log(workout);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate:true,
            pan:{
                duration:1,
            }
        });

        // workout._click();
    };

    _setLocalStorage(){
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage(){
        const data=JSON.parse(localStorage.getItem('workouts'));
        console.log(data);

        if(!data) return;

        this.#workouts=data;

        this.#workouts.forEach(work=>this._renderWorkout(work));
    }

    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
};

const app = new App();