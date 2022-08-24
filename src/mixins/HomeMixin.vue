<script>
import axios from "axios";

export default {
    name:'HomeMixin',
    methods: {
        getTopTracks() {
            return new Promise((resolve, reject) => {
             axios('https://shazam-core.p.rapidapi.com/v1/charts/world', {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
                  'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
                }
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
