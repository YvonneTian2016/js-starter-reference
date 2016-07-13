import $ from 'jquery';
import './style.scss';
import youtubeSearch from './youtube-api';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import debounce from 'lodash.debounce';

//all imports go at the top

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       videos: [],
       selectedVideo: null,
    };
    this.search('pixar');
    this.search = debounce(this.search, 300);

}
search(text){
 youtubeSearch(text).then(videos => {
   this.setState({
      videos,
      selectedVideo: videos[0],
    });
});
}

  render(){
    if(!this.state.selectedVideo)
    {
     return <div>Loading...</div>;
    }

    return (
    <div id="video-section">
       <SearchBar id="searchbar" onSearchChange={text => this.search(text)}/>
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
    </div>
    );
 }
}

ReactDOM.render(<App />, document.getElementById('main'));
