import { useNavigate } from 'react-router-dom';

export const AboutPage = () =>{

    const history = useNavigate()

    return(
        <div>
            <h1>Information</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut ornare ultrices nisi sit amet vulputate. 
                Proin gravida nunc vulputate elit rhoncus efficitur in vel purus. 
                Nam feugiat metus risus, vitae.
                </p>
            <button className="btn" onClick={()=> history('/')}>Back to task list</button>
        </div>
    )
}