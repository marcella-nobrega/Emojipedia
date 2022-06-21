import { React } from "react";
import './styles.css';


function Layout(props) {

    const emojiImg = props.emojiImg;
    const name = props.name;
    const meaning = props.meaning;
    const id = props.id;



    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {emojiImg}
                </span>
                <span>{name}</span>
            </dt>
            <dd>
                {meaning}
            </dd>
        </div>
    );
}

export default Layout;