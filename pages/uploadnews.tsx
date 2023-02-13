import axios from 'axios'
import CONSTENT from './../api.endpoints.constants'
import newsdata from './../config/bhaskarhindi.json'
const Uploadnews = () => {

    const importdata = async (cat: any, index: any) => {
        console.log(CONSTENT.BASE_URL_NEWS + 'addnews')
        axios.post(CONSTENT.BASE_URL_NEWS + 'addnews', cat[index]).then((response) => {
            console.log("response", response)
        })
    }

    const newsd = Object.keys(newsdata)
    return (
        <div className="container">
            <div className="cart">
                {newsd && newsd.map((cat: any, i: any) =>
                    <div key={i}>
                        <button className="btn btn-primary" onClick={() => importdata(newsdata, cat)}>{cat}</button>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Uploadnews