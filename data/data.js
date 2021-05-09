import Category from "../models/category"
import Tech from '../models/Tech'
export const CATEGORIES = [
    new Category('c1', 'React', '#f5428d',"../assets/techs/react.png"),
    new Category('c2', 'CSS', '#f54242',"../assets/techs/react.png"),
    new Category('c3', 'Flutter', '#f5a442',"../assets/techs/react.png"),
    new Category('c4', 'Javascript', '#f5d142',"../assets/techs/react.png"),
    new Category('c5', 'React Native', '#368dff',"../assets/techs/react.png"),
    new Category('c6', 'Database', '#41d95d',"../assets/techs/react.png"),
    new Category('c7', 'Editor', '#9eecff',"../assets/techs/react.png"),
    new Category('c8', 'Java', '#b9ffb0',"../assets/techs/react.png"),
    new Category('c9', 'Python', '#ffc7ff',"../assets/techs/react.png"),
    new Category('c10', 'CI&CD', '#47fced',"../assets/techs/react.png")
]

export const TECHS = [
    new Tech("t1",["c1"],"Router",""),
    new Tech("t2",["c1"],"DatePicker",""),
    new Tech("t3",["c1"],"Storybook",""),
    new Tech("t4",["c2"],"Sass",""),
    new Tech("t5",["c2"],"Less",""),
    new Tech("t6",["c3"],"Spinner",""),
    new Tech("t7",["c4"],"Fetch",""),
    new Tech("t8",["c4"],"Vue",""),
    new Tech("t9",["c4"],"Angular",""),
    new Tech("t10",["c4"],"React",""),
    new Tech("t11",["c5"],"Router",""),
    new Tech("t12",["c5"],"Dimension",""),
    new Tech("t13",["c6"],"Mysql",""),
    new Tech("t14",["c6"],"MongoDB",""),
    new Tech("t15",["c7"],"Visual",""),
    new Tech("t16",["c7"],"Android Studio",""),
    new Tech("t17",["c8"],"Sping",""),
    new Tech("t18",["c8"],"JSF",""),
    new Tech("t19",["c9"],"MathplotLib",""),
    new Tech("t20",["c9"],"Pygame",""),
    new Tech("t21",["c10"],"Netlify",""),
    new Tech("t22",["c10"],"Jenkins",""),
]

