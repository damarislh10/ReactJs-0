import heroes, {owners} from '../data/heroes'
console.log(owners)

export const getHeroeById = (id) => {
    return heroes.find((h) => h.id === id);
}

console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) =>  heroes.filter((h) => h.owner === owner);

console.log(getHeroesByOwner("DC"))