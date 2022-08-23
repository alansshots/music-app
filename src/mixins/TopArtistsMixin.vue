<script>
import axios from "axios";

export default {
    name:'TopArtistsMixin',
    methods: {
        getTopArtits() {
            return new Promise((resolve, reject) => {
             axios('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                },
             })
             .then(res => {
                resolve(res)
             })   
             .catch(err => {
                reject(err)
             }) 
            })
        },
    }
}
</script>
