//basic import
import{Abc} from "./modules";

//import with alias (as)
import{Abc as Cdf} from "./modules";

//import all class from modules with alias(as)
import * as mods from "./modules";

let abc = new Abc();
abc.a = "hello";
abc.b = "type Script";

let cdf = new Cdf();

let cls1 = new mods.Cls1();

let cls2 = new mods.Cls2();

let cls3 = new mods.Cls3();