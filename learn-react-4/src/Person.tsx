// Interfaces are ones which define shape of an object in typescript
interface PersonProps {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    optionalProp?: string; // wont give error in home page
    country: Country;
}

// When you need to give only few values to a variable, use typescript enum
export enum Country {
    India = "India",
    America = "America",
    England = "England",
}
export function Person(props: PersonProps) {
    // Defining type in states
    // const [name, setName] = useState<string>("John");

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>IsMarried: {props.isMarried}</h1>
            {props.friends.map((friend: string) => {
                return <h1>{friend}</h1>;
            })}
            <h1>Country: {props.country}</h1>
        </div>
    );
}
