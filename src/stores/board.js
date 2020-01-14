// eslint-disable-next-line no-unused-vars
import { action, observable, set } from "mobx";
import moment from "moment";

export class BoardStore {
  @observable users = [
    {
      author: "きき",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      profile: "hello"
    },
    {
      author: "木村",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      profile: "hello"
    },
    {
      author: "maro",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      profile: "hello"
    },
    {
      author: "綾香",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      profile: "hello"
    },
    {
      author: "光",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg",
      profile: "hello"
    }
  ];

  @observable articles = [
    {
      aid: "0",
      ...this.users[0],
      title: "お客さんが集まらなかった。",
      body: "お客さんが集まらなかった。",
      likes: 0,
      dislikes: 1000,
      comments: [
        {
          ...this.users[1],
          content: `うわー、あるある。俺も。どんな集客しました？`,
          datetime: moment().fromNow()
        },
        {
          ...this.users[0],
          content: `1 こくちーず使ったよ。`,
          datetime: moment().fromNow()
        },
        {
          ...this.users[2],
          content: `FacebookとかTwitterで拡散すればよかったのに。`,
          datetime: moment().fromNow()
        }
      ],
      datetime: moment().fromNow()
    },
    {
      aid: "1",
      ...this.users[1],
      title: "花火パーティーの企画をしたが、警察の許可がおりなかった。",
      body: "fdsafdsa",
      likes: 0,
      dislikes: 0,
      datetime: moment().fromNow()
    },
    {
      aid: "2",
      ...this.users[2],

      title: "レストランが、パーティーの主旨にそわない場所にあった。",
      body: "rewrew",
      likes: 0,
      dislikes: 0,
      datetime: moment().fromNow()
    },
    {
      aid: "3",
      ...this.users[3],

      title: "うるさすぎて、クレームが来た。",
      body: "rewrew",
      likes: 0,
      dislikes: 0,
      datetime: moment().fromNow()
    },
    {
      aid: "4",
      ...this.users[4],

      title: "締め切り告知を忘れて、定員の倍も来てしまった。",
      body: "rewrew",
      likes: 0,
      dislikes: 0,
      datetime: moment().fromNow()
    }
  ];

  @action getArticle(aid) {
    return this.articles.find(article => article.aid === aid);
  }
  // constructor() {
  // this.load();
  // autoSave(this, this.save.bind(this));
  // }

  // load() {
  //   if (localStorage.getItem('userInformation') !== null) {
  //     const data = localStorage.getItem('userInformation');
  //     set(this, JSON.parse(data));
  //     console.log(this.userInformation);
  //   }
  // }

  // save(json) {
  //   localStorage.setItem('userInformation', json);
  // }
}

export default BoardStore;
