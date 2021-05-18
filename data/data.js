import { floor } from "react-native-reanimated"
import Category from "../models/category"
import Tech from '../models/Tech'
export const CATEGORIES = [
    new Category('c1', 'React', '#f5428d',require("../assets/techs/react.png")),
    new Category('c2', 'CSS', '#f54242',require("../assets/techs/css-3.png")),
    new Category('c3', 'Flutter', '#f5a442',require("../assets/techs/flutter.png")),
    new Category('c4', 'Javascript', '#f5d142',require("../assets/techs/js.png")),
    new Category('c5', 'React Native', '#368dff',require("../assets/techs/react.png")),
    new Category('c6', 'Database', '#41d95d',require("../assets/techs/database.png")),
    new Category('c7', 'Editor', '#9eecff',require("../assets/techs/coding.png")),
    new Category('c8', 'Java', '#b9ffb0',require("../assets/techs/java.png")),
    new Category('c9', 'Python', '#ffc7ff',require("../assets/techs/python.png")),
    new Category('c10', 'CI&CD', '#47fced',require("../assets/techs/engranajes.png"))
]

export const TECHS = [
    new Tech("t1",["c1"],"Router",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t2",["c1"],"DatePicker",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t3",["c1"],"Storybook",require("../assets/techs/storybook.png"),true,false,false,false),
    new Tech("t4",["c2"],"Sass",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t5",["c2"],"Less",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t6",["c3"],"Spinner",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t7",["c4"],"Fetch",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t8",["c4"],"Vue",require("../assets/techs/react.png"),true,false,false,false),
    new Tech("t9",["c4"],"Angular",require("../assets/techs/react.png"),true,false,false),
    new Tech("t10",["c4"],"React",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t11",["c5"],"Dimension",require("../assets/techs/react.png"),true,true,false,false),
    new Tech("t12",["c6"],"Mysql",require("../assets/techs/react.png"),false,true,false,false),
    new Tech("t13",["c6"],"MongoDB",require("../assets/techs/react.png"),false,false,true,false),
    new Tech("t14",["c7"],"Visual",require("../assets/techs/react.png"),false,false,false,true),
    new Tech("t15",["c7"],"Android Studio",require("../assets/techs/react.png"),false,false,false,true),
    new Tech("t16",["c8"],"Sping",require("../assets/techs/react.png"),true,false,false,false),
    new Tech("t17",["c8"],"JSF",require("../assets/techs/react.png"),true,false,false,false),
    new Tech("t18",["c9"],"MathplotLib",require("../assets/techs/react.png"),false,false,true,true),
    new Tech("t19",["c9"],"Pygame",require("../assets/techs/react.png"),false,false,true,true),
    new Tech("t20",["c10"],"Netlify",require("../assets/techs/react.png"),false,false,true,false),
    new Tech("t21",["c10"],"Jenkins",require("../assets/techs/react.png"),false,false,true,false),
]

