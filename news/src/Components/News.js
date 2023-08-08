import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
     country:'in',
     pageSize:9,
     category:'general'
  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
  }
    // articles=[
    //     {
    //         "source": {
    //             "id": "news-com-au",
    //             "name": "News.com.au"
    //         },
    //         "author": null,
    //         "title": "A${this.props.country}sie cricket legend’s tragic reveal",
    //         "description": "Former A${this.props.country}tralian cricket captain Allan Border has revealed he has been battling Parkinson&rsquo;s disease for the past seven years.",
    //         "url": "https://www.news.com.au/sport/cricket/a${this.props.country}tralian-cricket-legend-allan-border-has-parkinsons-disease/news-story/0aa6bbc66eaa2d976adfe5b0d7c6c989",
    //         "urlToImage": "https://content.api.news/v3/images/bin/bfdd99638cc12c6172fe6118f1243946",
    //         "publishedAt": "2023-06-30T12:30:00Z",
    //         "content": "Former A${this.props.country}tralian cricket captain Allan Border has revealed he has been battling Parkinson’s disease for the past seven years.\r\nThe cricket legend revealed the shocking news in The A${this.props.country}tralian in an a… [+1786 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    constructor(props){
        super(props);
        console.log("Happy Guru Purnima");
        this.state={
           // articles:this.articles,
            articles:[],
            loading: false,
            page:1,
            totalResults:0
        }
       document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsAdda`;
    }
    async updateNews(pageNo){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a34e0be195f409dbb266aec1d2f224c&page=${this.props.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({loading:true});
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
         totalResults:parsedData.totalResults,
        loading:false,
      })
    }
   async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a34e0be195f409dbb266aec1d2f224c&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({loading:true});
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles,
        //    totalResults:parsedData.totalResults,
        //   loading:false})
        this.updateNews();
    }

    handlePrev= async()=>{
      console.log("prev");
  //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a34e0be195f409dbb266aec1d2f224c&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true});
  //     let data=await fetch(url); 
  //     let parsedData=await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //         page: this.state.page - 1,
  //         articles: parsedData.articles,
  //         loading:false
  // })
         this.setState({page: this.state.page-1});
         this.updateNews();
    }
    handleNext= async()=>{
        console.log("Next");
    //     if(!(this.state.page+1>Math.ceil( this.state.totalResults/this.props.pageSize))){
          
    //      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a34e0be195f409dbb266aec1d2f224c&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    //      this.setState({loading:true});
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
    //     console.log(parsedData);

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //        loading:false
    //    }) 
    // }
    this.setState({page: this.state.page+1});
    this.updateNews();

  }

  fetchMoreData = async() => {
   this.setState({page: this.state.page+1});
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a34e0be195f409dbb266aec1d2f224c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let data=await fetch(url);
   let parsedData=await data.json();
   this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults:parsedData.totalResults,
    loading:false})
  };

  render() {
    return (
        <div className="container my-3"> 
        <h1 className="text-center"  style={{margin:'30px,0px'}}>News Adda - Top  {this.capitalizeFirstLetter(this.props.category)} headlines </h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          // dataLength={this.state.item.length}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
         { /* {!this.state.loading &&this.state.articles.map((element)=>{
            return ( <div className="col-md-4" key={element.url}>
              <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
              imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            ) 
  })} */}

          <div className="row">

            {this.state.articles.map((element)=>{
            return ( <div className="col-md-4" key={element.url}>
              <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
              imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            ) 
  })}
         </div> 
         </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previo${this.props.country} </button>
          <button disabled={this.state.page+1>Math.ceil( this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

          </div>
        </div> */}
       </div>
     
    );
  }
}

export default News;
