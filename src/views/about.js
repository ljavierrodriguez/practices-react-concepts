import { useContext } from "react";
import { Context } from "../contexts/DarkModeContext";

const About = () => {
    const { theme } = useContext(Context);
    return (
        <>
            <div className={"container " + theme}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>About</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;