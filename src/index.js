console.log('%c HI', 'color: firebrick')
window.addEventListener('load', () => {
    fetchImage(),
        fetchBreed()
    filterBreed()








});

function fetchImage() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then((res) => res.json())
        .then((images) => {
            const imageDiv = document.querySelector('#dog-image-container');
            images.message.forEach(image => {
                const img = document.createElement('img')
                img.src = image;
                imageDiv.appendChild(img);
            });
        }).catch((error) => error)
}

function fetchBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(
            dogBreeds => {
                Object.keys(dogBreeds.message).forEach(breed => {

                    const dogBreed = document.querySelector('#dog-breeds');
                    const li = document.createElement('li');
                    li.textContent = breed;
                    dogBreed.appendChild(li);
                    li.addEventListener('click', (e) => {
                        e.target.style.color = 'rgb(128,0,0)'
                    })
                })
            }
        );
}

function filterBreed() {
    const select = document.querySelector('#breed-dropdown');
    const dogBreed = document.querySelector('#dog-breeds');

    select.addEventListener('click', e => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then((breeds) => {
                dogBreed.innerHTML = '';
                const newBreeds = Object.keys(breeds.message).filter(breed => breed[0] === e.target.value);
                newBreeds.forEach(breed => {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    dogBreed.appendChild(li)
                })
            })

    })
}