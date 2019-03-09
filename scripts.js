var app = new Vue({
  el: '#app',
  data: {
    month: '2019-03-01',
   //games: [],
   loading: true,
   current: {

   },
   games: {},
   /*games: {
     homeTeam: '',
     awayTeam: '',
     homeScore: '',
     awayScore: '',
   },*/
 },
 created(){
   this.nba();
 },
 methods: {
   async nba(){
     try {
          this.loading = true;
          const response = await axios.get('https://www.balldontlie.io/api/v1/games?per_page=100&end_date=2019-03-10&start_date=' + this.month);
          this.current = response.data;
          Vue.set(app.games, this.current.data.length, new Array);
          for(let i = 0; i < this.current.data.length; ++i){
            if(this.current.data[i].status === "Final"){
              /*this.games.push({
                homeTeam: this.current.data[i].home_team.full_name,
                awayTeam: this.current.data[i].visitor_team.full_name,
                homeScore: this.current.data[i].home_team_score,
                awayScore: this.current.data[i].visitor_team_score
              });*/
              console.log(this.current.data[i].home_team.full_name);
              console.log(this.current.data[i].home_team_score);
              console.log(this.current.data[i].visitor_team.full_name);
              console.log(this.current.data[i].visitor_team_score);
            }

          }
          console.log(this.current);
          this.loading = false;
        } catch (error) {
          this.number = this.max;
          console.log(error);
        }
   }
 }

});
