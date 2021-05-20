<template>
  <div>
    <table>
      <tr>
        <th>序号</th>
        <th @click="sortbyname(nameval)">姓名</th>
        <th @click="sortbyage(val)">年龄</th>
        <th @click="sortbygrade(val)">分数</th>
        <th>日期</th>
      </tr>
      <tr v-for="(item, index) in infolist" :key="index">
        <td>
          {{ index + 1 }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.age }}
        </td>
        <td>
          {{ item.grade }}
        </td>
        <td>
          {{ item.date }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "songlist",
  data() {
    return {
      val: 0,
      nameval: 0,
      currenti:0,
      infolist: [
        {
          name: "alaska",
          age: "29",
          grade: "98",
          date: "2020-09-13",
        },
        {
          name: "alian",
          age: "25",
          grade: "78",
          date: "2021-01-13",
        },
        {
          name: "zest",
          age: "31",
          grade: "89",
          date: "2019-06-13",
        },
        {
          name: "blast",
          age: "30",
          grade: "77",
          date: "2020-09-22",
        },
        {
          name: "blank",
          age: "28",
          grade: "78",
          date: "2019-09-21",
        },
        {
          name: "scrott",
          age: "29",
          grade: "96",
          date: "2020-04-15",
        },
        {
          name: "kelen",
          age: "23",
          grade: "69",
          date: "2021-02-23",
        },
        {
          name: "scallet",
          age: "23",
          grade: "97",
          date: "2020-09-13",
        },
      ],
    };
  },
  methods: {
    sortbyname(nameval) {
      if (nameval == 0) {
        this.infolist.sort((a, b) => {
          let aArr 
          let bArr
          if(a.name.length < b.name.length){
            aArr = a.name.split('')
            bArr = b.name.split('')
            for(let i = 0;i<=aArr.length;i++){
              console.log(aArr[i],bArr[i]);
              if(aArr[i].charCodeAt(0)<bArr[i].charCodeAt(0)){
                this.currenti = i
                break
              }
            }
            console.log(this.currenti);
            return a.name.charCodeAt(this.currenti) - b.name.charCodeAt(this.currenti);
          }else{
            aArr = b.name.split('')
            bArr = a.name.split('')
            for(let i = 0;i<=aArr.length;i++){
              if(aArr[i].charCodeAt(0)<bArr[i].charCodeAt(0)){
                this.currenti = i
                break
              }
            }
            return a.name.charCodeAt(this.currenti) - b.name.charCodeAt(this.currenti);
            
          }
          
        });
        this.nameval = 1
      }else{
        this.infolist.reverse()
      }
    },
    sortbyage(val) {
      if (val == 0) {
        this.val = 1;
        this.infolist.sort((a, b) => {
          return a.age - b.age;
        });
      } else {
        this.val = 0;
        this.infolist.sort((a, b) => {
          return b.age - a.age;
        });
      }
    },
    sortbygrade(val) {
      if (val == 0) {
        this.val = 1;
        this.infolist.sort((a, b) => {
          return a.grade - b.grade;
        });
      } else {
        this.val = 0;
        this.infolist.sort((a, b) => {
          return b.grade - a.grade;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>