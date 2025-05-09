import {ReactElement} from "react";


export type Route = {
    path: string;
    element: ReactElement;
}

// type RouteOnlyPath = Pick<Route, "path">;
// type RouteOnlyPath = Omit<Route, "element">;
// > create type RouteOnlyPath without element;

//Record декларация типа объекта где ключи всегда строки, а значение всегда number:
// type onlyStringAndNumber = Record<string,number>
// const obj: onlyStringAndNumber = {
//     hui: 123,
//     pizza: "123"
// }





