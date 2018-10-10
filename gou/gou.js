let list=[
	{
       title:"车工官方旗舰店",
       shang:[
        {
         	picture:"",
         	intrduce:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护磁护全合成 4L 5W-40 SN",
         	price:"299",
         	num:"1",
         	sTotol:"299"
         }
       ]
	}
    ]
var app = new Vue({
	el:"#zee",
	data:{
		choose:false,
		items:list,
		units:1,
		cookie:false
	},
	methods:{
		chose:function(){
			this.choose=!this.choose
		},
		minus:function(){
			this.units+=1;
		}
		plus:function(){
			this.units-=1;
			if (this.unit=0) {
               this.cookie=!this.cookie
			}
		}
		// oChose:function(){
		// 	this.
		// }
	}
})