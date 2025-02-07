const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, galleryKey, newKey) {
  for (let key in gallery) {
    if (galleryKey !== key) {
      gallery[galleryKey] = newKey
    } else if (galleryKey === key) {
      gallery[galleryKey] = newKey
    }
  }
}


updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

console.log(gallery);