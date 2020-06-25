// // //graph for stocks
// // // import React from 'react';
// // // import axios from 'axios';
// // //
// // // function StockGraph() {
// // //     let [responseData, setResponseData] = React.useState('');
// // //
// // //     const fetchData = React.useCallback(() => {
// // //         axios({
// // //             "method":"GET",
// // //             "url":"https://alpha-vantage.p.rapidapi.com/query",
// // //             "headers":{
// // //                 "content-type":"application/octet-stream",
// // //                 "x-rapidapi-host":"alpha-vantage.p.rapidapi.com",
// // //                 "x-rapidapi-key":"1d172e189cmshe8799bf1f91152bp1702fejsn5eeaa1cb9bd8",
// // //                 "useQueryString":true
// // //             },"params":{
// // //                 "outputsize":"compact",
// // //                 "datatype":"json",
// // //                 "function":"TIME_SERIES_DAILY",
// // //                 "symbol":"MSFT"
// // //             }
// // //         })
// // //             .then((response) => {
// // //                 setResponseData(response.data)
// // //             })
// // //             .catch((error) => {
// // //                 console.log(error)
// // //             })
// // //     }, [])
// // //
// // //     React.useEffect(() => {
// // //         fetchData()
// // //     }, [fetchData])
// // //
// // //     return (
// // //         <div className="graph">
// // //             {/*<header className="App-header">*/}
// // //             {/*    <h2>*/}
// // //             {/*        Data from the Stocks API:*/}
// // //             {/*    </h2>*/}
// // //             {/*</header>*/}
// // //             {/*/!*Displaying the data from the API*!/*/}
// // //             <pre>
// // //           {responseData && JSON.stringify(responseData, null, 4)}
// // //                 </pre>
// // //             {/*    transformResponse: [function (data) {*/}
// // //             {/*    // Do whatever you want to transform the data*/}
// // //             {/*    console.log('Transforming data...')*/}
// // //
// // //             {/*    const json = JSON.parse(data)*/}
// // //
// // //             {/*    const dates = Object.keys(json['Time Series (Daily)']).reverse()*/}
// // //
// // //             {/*    // Construct response data for chart input*/}
// // //             {/*    const closePrices = dates.map(date => date = {*/}
// // //             {/*    date,*/}
// // //             {/*    close: Number(json['Time Series (Daily)'][date]['4. close'])*/}
// // //             {/*})*/}
// // //
// // //             {/*    const symbol = json['Meta Data']['2. Symbol']*/}
// // //             {/*    const refreshed = json['Meta Data']['3. Last Refreshed']*/}
// // //
// // //             {/*    data = {*/}
// // //             {/*    symbol,*/}
// // //             {/*    refreshed,*/}
// // //             {/*    closePrices*/}
// // //             {/*}*/}
// // //
// // //             {/*    return data;*/}
// // //             {/*}],*/}
// // //             {/*    }),*/}
// // //             {/*    }*/}
// // //         </div>
// // //     );
// // // }
// // //
// // // export default StockGraph;
// //
// //
// // //
// // // const instance = axios.create({
// // //     baseURL: 'https://alpha-vantage.p.rapidapi.com',
// // //     headers: {
// // //         'content-type':'application/octet-stream',
// // //         'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
// // //         'x-rapidapi-key': '1d172e189cmshe8799bf1f91152bp1702fejsn5eeaa1cb9bd8',
// // //         'useQueryString':true
// // //     }
// // // });
// // //
// // // export default {
// // //     stockTimeSeries:
// // //         // (symbol) =>
// // //         instance({
// // //             'method':'GET',
// // //             'url':'/query',
// // //             'params': {
// // //                 'outputsize':'compact',
// // //                 'datatype':'json',
// // //                 'function':'TIME_SERIES_DAILY',
// // //                 'symbol':'MSFT'
// // //                 // 'symbol': symbol.toUpperCase()
// // //             },
// // //             transformResponse: [function (data) {
// // //                 // Do whatever you want to transform the data
// // //                 console.log('Transforming data...')
// // //
// // //                 const json = JSON.parse(data)
// // //
// // //                 const dates = Object.keys(json['Time Series (Daily)']).reverse()
// // //
// // //                 // Construct response data for chart input
// // //                 const closePrices = dates.map(date => date = {
// // //                     date,
// // //                     close: Number(json['Time Series (Daily)'][date]['4. close'])
// // //                 })
// // //
// // //                 const symbol = json['Meta Data']['2. Symbol']
// // //                 const refreshed = json['Meta Data']['3. Last Refreshed']
// // //
// // //                 data = {
// // //                     symbol,
// // //                     refreshed,
// // //                     closePrices
// // //                 }
// // //
// // //                 return data;
// // //             }],
// // //         }),
// // // }
// //
// // // const axios = require("axios");
// //
// // // axios({
// // //     "method":"GET",
// // //     "url":"https://alpha-vantage.p.rapidapi.com/query",
// // //     "headers":{
// // //         "content-type":"application/octet-stream",
// // //         "x-rapidapi-host":"alpha-vantage.p.rapidapi.com",
// // //         "x-rapidapi-key":"1d172e189cmshe8799bf1f91152bp1702fejsn5eeaa1cb9bd8",
// // //         "useQueryString":true
// // //     },"params":{
// // //         "outputsize":"compact",
// // //         "datatype":"json",
// // //         "function":"TIME_SERIES_DAILY",
// // //         "symbol":"MSFT"
// // //     }
// // // })
// // //     .then((response)=>{
// // //         console.log(response)
// // //     })
// // //     .catch((error)=>{
// // //         console.log(error)
// // //     });
// // //
// // // xport default {
// // //     stockTimeSeries: (symbol) =>
// // //         instance({
// // //             'method':'GET',
// // //             'url':'/query',
// // //             'params': {
// // //                 'outputsize':'compact',
// // //                 'datatype':'json',
// // //                 'function':'TIME_SERIES_DAILY_ADJUSTED',
// // //                 'symbol': symbol.toUpperCase()
// // //             },
// // //         })
// // // }
// // //         transformResponse: axios.defaults.transformResponse.concat((data) [function (data) {
// // //     console.log('Transforming data...')
// // //     const json = JSON.parse(data)
// // //     const dates = Object.keys(json['Time Series (Daily)']).reverse()
// // //     const closePrices = dates.map(date => date = {
// // //     date,
// // //     close: Number(json['Time Series (Daily)'][date]['4. close'])
// // // })
// // //     const symbol = json['Meta Data']['2. Symbol']
// // //     const refreshed = json['Meta Data']['3. Last Refreshed']
// // //
// // //     data = {
// // //     symbol,
// // //     refreshed,
// // //     closePrices
// // // }
// // //
// // //     return data;
// // // }],
// // //     }),
// // //     }
// //
// //
// //
// // import React, { PureComponent } from 'react';
// // import {
// //     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// // } from 'recharts';
// //
// // const data = [
// //     {
// //         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
// //     },
// //     {
// //         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
// //     },
// //     {
// //         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
// //     },
// //     {
// //         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
// //     },
// //     {
// //         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
// //     },
// //     {
// //         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
// //     },
// //     {
// //         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
// //     },
// // ];
// //
// // export default class Example extends PureComponent {
// //     static jsfiddleUrl = 'https://jsfiddle.net/alidingling/zjb47e83/';
// //
// //     render() {
// //         return (
// //             <LineChart
// //                 width={500}
// //                 height={300}
// //                 data={data}
// //                 margin={{
// //                     top: 5, right: 30, left: 20, bottom: 5,
// //                 }}
// //             >
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="name" />
// //                 <YAxis yAxisId="left" />
// //                 <YAxis yAxisId="right" orientation="right" />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
// //                 <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
// //             </LineChart>
// //         );
// //     }
// // }
// import React, { PureComponent } from 'react';
// import {
//     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';
//
// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];
//
// export default class Example extends PureComponent {
//     static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
//
//     render() {
//         return (
//             <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5, right: 30, left: 20, bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//             </LineChart>
//         );
//     }
// }
//
// {/*<LineChart*/}
// {/*    width={900}*/}
// {/*    height={500}*/}
// {/*    data={responseData.openPrices}*/}
// {/*    margin={{ top: 50, right: 20, left: 10, bottom: 50 }}>*/}
// {/*    <YAxis yAxisId="left" tickCount={10} type="number" width={80}>*/}
// {/*        <Label value="Open Price" position="insideLeft" angle={270} />*/}
// {/*    </YAxis>*/}
// {/*    <Tooltip />*/}
// {/*    <Line yAxisId="left" type="monotone" dataKey="open" stroke="#82ca9d" activeDot={{ r: 8 }} />*/}
// {/*    <XAxis padding={{left: 5, right: 5}} tickCount={10} angle={-60} height={90} dataKey="date" />*/}
// {/*    <Label value="Date" position="insideBottomRight" />*/}
// {/*    /!*</XAxis>*!/*/}
// {/*    <CartesianGrid stroke="#f5f5f5" />*/}
// {/*    <Line type="monotone" dataKey="close" stroke="#a9a7d9" yAxisId={0} />*/}
// {/*</LineChart>*/}
//
//
// {/*export default function Home() {*/}
// {/*  return (*/}
// {/*      <Layout>*/}
// {/*    <div className="container">*/}
// {/*      <main>*/}
// {/*        <h1 className="title">*/}
// {/*          Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
// {/*        </h1>*/}
// {/*      </main>*/}
//
// {/*    <p className="description">*/}
// {/*      Get started by editing <code>pages/index.js</code>*/}
// {/*    </p>*/}
//
// {/*    <div className="grid">*/}
// {/*      <a href="https://nextjs.org/docs" className="card">*/}
// {/*        <h3>Documentation &rarr;</h3>*/}
// {/*        <p>Find in-depth information about Next.js features and API.</p>*/}
// {/*      </a>*/}
//
// {/*      <a href="https://nextjs.org/learn" className="card">*/}
// {/*        <h3>Learn &rarr;</h3>*/}
// {/*        <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
// {/*      </a>*/}
//
// {/*      <a*/}
// {/*        href="https://github.com/vercel/next.js/tree/master/examples"*/}
// {/*        className="card"*/}
// {/*      >*/}
// {/*        <h3>Examples &rarr;</h3>*/}
// {/*        <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
// {/*      </a>*/}
//
// {/*      <a*/}
// {/*        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
// {/*        className="card"*/}
// {/*      >*/}
// {/*        <h3>Deploy &rarr;</h3>*/}
// {/*        <p>*/}
// {/*          Instantly deploy your Next.js site to a public URL with Vercel.*/}
// {/*        </p>*/}
// {/*      </a>*/}
// {/*    </div>*/}
// {/*  </main>*/}
//
// {/*  <footer>*/}
// {/*    <a*/}
// {/*      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
// {/*      target="_blank"*/}
// {/*      rel="noopener noreferrer"*/}
// {/*    >*/}
// {/*      Powered by{' '}*/}
// {/*      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />*/}
// {/*    </a>*/}
// {/*  </footer>*/}
//
// {/*</div>*/}
// {/*      </Layout>*/}
// {/*  )*/}
// {/*}*/}
//
//
// // // AXIOS GLOBALS
// // axios.defaults.headers.common['X-Auth-Token'] =
// //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
// //
// // // GET REQUEST
// // function getTodos() {
// //     // axios({
// //     //   method: 'get',
// //     //   url: 'https://jsonplaceholder.typicode.com/todos',
// //     //   params: {
// //     //     _limit: 5
// //     //   }
// //     // })
// //     //   .then(res => showOutput(res))
// //     //   .catch(err => console.error(err));
// //
// //     axios
// //         .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
// //             timeout: 5000
// //         })
// //         .then(res => showOutput(res))
// //         .catch(err => console.error(err));
// // }
// //
// // // POST REQUEST
// // function addTodo() {
// //     axios
// //         .post('https://jsonplaceholder.typicode.com/todos', {
// //             title: 'New Todo',
// //             completed: false
// //         })
// //         .then(res => showOutput(res))
// //         .catch(err => console.error(err));
// // }
// //
// // // PUT/PATCH REQUEST
// // function updateTodo() {
// //     axios
// //         .patch('https://jsonplaceholder.typicode.com/todos/1', {
// //             title: 'Updated Todo',
// //             completed: true
// //         })
// //         .then(res => showOutput(res))
// //         .catch(err => console.error(err));
// // }
// //
// // // DELETE REQUEST
// // function removeTodo() {
// //     axios
// //         .delete('https://jsonplaceholder.typicode.com/todos/1')
// //         .then(res => showOutput(res))
// //         .catch(err => console.error(err));
// // }
// //
// // // SIMULTANEOUS DATA
// // function getData() {
// //     axios
// //         .all([
// //             axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
// //             axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
// //         ])
// //         .then(axios.spread((todos, posts) => showOutput(posts)))
// //         .catch(err => console.error(err));
// // }
// //
// // // CUSTOM HEADERS
// // function customHeaders() {
// //     const config = {
// //         headers: {
// //             'Content-Type': 'application/json',
// //             Authorization: 'sometoken'
// //         }
// //     };
// //
// //     axios
// //         .post(
// //             'https://jsonplaceholder.typicode.com/todos',
// //             {
// //                 title: 'New Todo',
// //                 completed: false
// //             },
// //             config
// //         )
// //         .then(res => showOutput(res))
// //         .catch(err => console.error(err));
// // }
// //
// // // TRANSFORMING REQUESTS & RESPONSES
// // function transformResponse() {
// //     const options = {
// //         method: 'post',
// //         url: 'https://jsonplaceholder.typicode.com/todos',
// //         data: {
// //             title: 'Hello World'
// //         },
// //         transformResponse: axios.defaults.transformResponse.concat(data => {
// //             data.title = data.title.toUpperCase();
// //             return data;
// //         })
// //     };
// //
// //     axios(options).then(res => showOutput(res));
// // }
// //
// // // ERROR HANDLING
// // function errorHandling() {
// //     axios
// //         .get('https://jsonplaceholder.typicode.com/todoss', {
// //             // validateStatus: function(status) {
// //             //   return status < 500; // Reject only if status is greater or equal to 500
// //             // }
// //         })
// //         .then(res => showOutput(res))
// //         .catch(err => {
// //             if (err.response) {
// //                 // Server responded with a status other than 200 range
// //                 console.log(err.response.data);
// //                 console.log(err.response.status);
// //                 console.log(err.response.headers);
// //
// //                 if (err.response.status === 404) {
// //                     alert('Error: Page Not Found');
// //                 }
// //             } else if (err.request) {
// //                 // Request was made but no response
// //                 console.error(err.request);
// //             } else {
// //                 console.error(err.message);
// //             }
// //         });
// // }
// //
// // // CANCEL TOKEN
// // function cancelToken() {
// //     const source = axios.CancelToken.source();
// //
// //     axios
// //         .get('https://jsonplaceholder.typicode.com/todos', {
// //             cancelToken: source.token
// //         })
// //         .then(res => showOutput(res))
// //         .catch(thrown => {
// //             if (axios.isCancel(thrown)) {
// //                 console.log('Request canceled', thrown.message);
// //             }
// //         });
// //
// //     if (true) {
// //         source.cancel('Request canceled!');
// //     }
// // }
// //
// // // INTERCEPTING REQUESTS & RESPONSES
// // axios.interceptors.request.use(
// //     config => {
// //         console.log(
// //             `${config.method.toUpperCase()} request sent to ${
// //                 config.url
// //             } at ${new Date().getTime()}`
// //         );
// //
// //         return config;
// //     },
// //     error => {
// //         return Promise.reject(error);
// //     }
// // );
// //
// // // AXIOS INSTANCE
// // const axiosInstance = axios.create({
// //     // Other custom settings
// //     baseURL: 'https://jsonplaceholder.typicode.com'
// // });
// // // axiosInstance.get('/comments').then(res => showOutput(res));
// //
// // // Show output in browser
// // function showOutput(res) {
// //     document.getElementById('res').innerHTML = `
// //   <div class="card card-body mb-4">
// //     <h5>Status: ${res.status}</h5>
// //   </div>
// //   <div class="card mt-3">
// //     <div class="card-header">
// //       Headers
// //     </div>
// //     <div class="card-body">
// //       <pre>${JSON.stringify(res.headers, null, 2)}</pre>
// //     </div>
// //   </div>
// //   <div class="card mt-3">
// //     <div class="card-header">
// //       Data
// //     </div>
// //     <div class="card-body">
// //       <pre>${JSON.stringify(res.data, null, 2)}</pre>
// //     </div>
// //   </div>
// //   <div class="card mt-3">
// //     <div class="card-header">
// //       Config
// //     </div>
// //     <div class="card-body">
// //       <pre>${JSON.stringify(res.config, null, 2)}</pre>
// //     </div>
// //   </div>
// // `;
// // }
// //
// // // Event listeners
// // document.getElementById('get').addEventListener('click', getTodos);
// // document.getElementById('post').addEventListener('click', addTodo);
// // document.getElementById('update').addEventListener('click', updateTodo);
// // document.getElementById('delete').addEventListener('click', removeTodo);
// // document.getElementById('sim').addEventListener('click', getData);
// // document.getElementById('headers').addEventListener('click', customHeaders);
// // document
// //     .getElementById('transform')
// //     .addEventListener('click', transformResponse);
// // document.getElementById('error').addEventListener('click', errorHandling);
// // document.getElementById('cancel').addEventListener('click', cancelToken);
//
//
// <form>
//     <fieldset>
//         <legend>Legend</legend>
//         <div className="form-group row">
//             <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
//             <div className="col-sm-10">
//                 <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail"
//                        value="email@example.com">
//             </div>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                    placeholder="Enter email">
//                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
//                     else.</small>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleSelect1">Example select</label>
//             <select className="form-control" id="exampleSelect1">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//             </select>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleSelect2">Example multiple select</label>
//             <select multiple="" className="form-control" id="exampleSelect2">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//             </select>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleTextarea">Example textarea</label>
//             <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputFile">File input</label>
//             <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
//                 <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for
//                     the above input. It's a bit lighter and easily wraps to a new line.</small>
//         </div>
//         <fieldset className="form-group">
//             <legend>Radio buttons</legend>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
//                            value="option1" checked="">
//                         Option one is this and that—be sure to include why it's great
//                 </label>
//             </div>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2"
//                            value="option2">
//                         Option two can be something else and selecting it will deselect option one
//                 </label>
//             </div>
//             <div className="form-check disabled">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3"
//                            value="option3" disabled="">
//                         Option three is disabled
//                 </label>
//             </div>
//         </fieldset>
//         <fieldset className="form-group">
//             <legend>Checkboxes</legend>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input className="form-check-input" type="checkbox" value="" checked="">
//                         Option one is this and that—be sure to include why it's great
//                 </label>
//             </div>
//             <div className="form-check disabled">
//                 <label className="form-check-label">
//                     <input className="form-check-input" type="checkbox" value="" disabled="">
//                         Option two is disabled
//                 </label>
//             </div>
//         </fieldset>
//         <fieldset className="form-group">
//             <legend>Sliders</legend>
//             <label htmlFor="customRange1">Example range</label>
//             <input type="range" className="custom-range" id="customRange1">
//         </fieldset>
//         <button type="submit" className="btn btn-primary">Submit</button>
//     </fieldset>
// </form>
//
// <form>
//     <fieldset>
//         <legend>Legend</legend>
//         <div className="form-group row">
//             <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
//             <div className="col-sm-10">
//                 <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail"
//                        value="email@example.com">
//             </div>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                    placeholder="Enter email">
//                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
//                     else.</small>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleSelect1">Example select</label>
//             <select className="form-control" id="exampleSelect1">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//             </select>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleSelect2">Example multiple select</label>
//             <select multiple="" className="form-control" id="exampleSelect2">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//             </select>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleTextarea">Example textarea</label>
//             <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputFile">File input</label>
//             <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
//                 <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for
//                     the above input. It's a bit lighter and easily wraps to a new line.</small>
//         </div>
//         <fieldset className="form-group">
//             <legend>Radio buttons</legend>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
//                            value="option1" checked="">
//                         Option one is this and that—be sure to include why it's great
//                 </label>
//             </div>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2"
//                            value="option2">
//                         Option two can be something else and selecting it will deselect option one
//                 </label>
//             </div>
//             <div className="form-check disabled">
//                 <label className="form-check-label">
//                     <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3"
//                            value="option3" disabled="">
//                         Option three is disabled
//                 </label>
//             </div>
//         </fieldset>
//         <fieldset className="form-group">
//             <legend>Checkboxes</legend>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input className="form-check-input" type="checkbox" value="" checked="">
//                         Option one is this and that—be sure to include why it's great
//                 </label>
//             </div>
//             <div className="form-check disabled">
//                 <label className="form-check-label">
//                     <input className="form-check-input" type="checkbox" value="" disabled="">
//                         Option two is disabled
//                 </label>
//             </div>
//         </fieldset>
//         <fieldset className="form-group">
//             <legend>Sliders</legend>
//             <label htmlFor="customRange1">Example range</label>
//             <input type="range" className="custom-range" id="customRange1">
//         </fieldset>
//         <button type="submit" className="btn btn-primary">Submit</button>
//     </fieldset>
// </form>
//
// {
//     "result": [
// {
//     "name": "Key Statistics",
//     "table": [
// {
//     "name": "Current P/E Ratio (ttm)",
//     "value": "26.01"
// },
// {
//     "name": "Estimated P/E",
//     "value": "26.69",
//     "comment": "(2020-09)"
// },
// {
//     "name": "Relative P/E",
//     "value": "1.17",
//     "comment": "vs SPX:IND"
// },
// {
//     "name": "Earnings Per Share (ttm)",
//     "value": "12.75"
// },
// {
//     "name": "Est. EPS",
//     "value": "12.42",
//     "comment": "(2020-09)"
// },
// {
//     "name": "Est. PEG Ratio",
//     "value": "2.43"
// },
// {
//     "name": "Market Cap (M)",
//     "value": "1,436,832.05"
// },
// {
//     "name": "Shares Outstanding (M)",
//     "value": "4,334.34"
// },
// {
//     "name": "Price/Book (mrq)",
//     "value": "18.28"
// },
// {
//     "name": "Price/Sales (ttm)",
//     "value": "5.51"
// },
// {
//     "name": "Dividend Indicated Gross Yield",
//     "value": "0.99%"
// },
// {
//     "name": "Next Earnings Announcement",
//     "value": "2020-07-30"
// },
// {
//     "name": "Last Dividend Reported",
//     "value": "0.82",
//     "comment": "(2020-05-08)"
// },
// {
//     "name": "5Y Net Dividend Growth",
//     "value": "10.15%"
// },
// {
//     "name": "Average Volume (30-day)",
//     "value": "33,171,242"
// }
//     ]
// }
//     ]
//
//
//
//
//     import React, { PureComponent } from 'react';
//     import {
//     Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
// } from 'recharts';
//
//     const data = [
// { name: 1, cost: 4.11, impression: 100 },
// { name: 2, cost: 2.39, impression: 120 },
// { name: 3, cost: 1.37, impression: 150 },
// { name: 4, cost: 1.16, impression: 180 },
// { name: 5, cost: 2.29, impression: 200 },
// { name: 6, cost: 3, impression: 499 },
// { name: 7, cost: 0.53, impression: 50 },
// { name: 8, cost: 2.52, impression: 100 },
// { name: 9, cost: 1.79, impression: 200 },
// { name: 10, cost: 2.94, impression: 222 },
// { name: 11, cost: 4.3, impression: 210 },
// { name: 12, cost: 4.41, impression: 300 },
// { name: 13, cost: 2.1, impression: 50 },
// { name: 14, cost: 8, impression: 190 },
// { name: 15, cost: 0, impression: 300 },
// { name: 16, cost: 9, impression: 400 },
// { name: 17, cost: 3, impression: 200 },
// { name: 18, cost: 2, impression: 50 },
// { name: 19, cost: 3, impression: 100 },
// { name: 20, cost: 7, impression: 100 },
//     ];
//
//     const getAxisYDomain = (from, to, ref, offset) => {
//     const refData = data.slice(from - 1, to);
//     let [bottom, top] = [refData[0][ref], refData[0][ref]];
//     refData.forEach((d) => {
//     if (d[ref] > top) top = d[ref];
//     if (d[ref] < bottom) bottom = d[ref];
// });
//
//     return [(bottom | 0) - offset, (top | 0) + offset];
// };
//
//     const initialState = {
//     data,
//     left: 'dataMin',
//     right: 'dataMax',
//     refAreaLeft: '',
//     refAreaRight: '',
//     top: 'dataMax+1',
//     bottom: 'dataMin-1',
//     top2: 'dataMax+20',
//     bottom2: 'dataMin-20',
//     animation: true,
// };
//
//     export default class Example extends PureComponent {
//     static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';
//
//     constructor(props) {
//     super(props);
//     this.state = initialState;
// }
//
//     zoom() {
//     let { refAreaLeft, refAreaRight, data } = this.state;
//
//     if (refAreaLeft === refAreaRight || refAreaRight === '') {
//     this.setState(() => ({
//     refAreaLeft: '',
//     refAreaRight: '',
// }));
//     return;
// }
//
//     // xAxis domain
//     if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
//
//     // yAxis domain
//     const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
//     const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);
//
//     this.setState(() => ({
//     refAreaLeft: '',
//     refAreaRight: '',
//     data: data.slice(),
//     left: refAreaLeft,
//     right: refAreaRight,
//     bottom,
//     top,
//     bottom2,
//     top2,
// }));
// }
//
//     zoomOut() {
//     const { data } = this.state;
//     this.setState(() => ({
//     data: data.slice(),
//     refAreaLeft: '',
//     refAreaRight: '',
//     left: 'dataMin',
//     right: 'dataMax',
//     top: 'dataMax+1',
//     bottom: 'dataMin',
//     top2: 'dataMax+50',
//     bottom2: 'dataMin+50',
// }));
// }
//
//     render() {
//     const {
//     data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,
// } = this.state;
//
//     return (
//     <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
//     <button
//     // href="javascript: void(0);"
//     className="btn update"
//     onClick={this.zoomOut.bind(this)}
//     >
//     Zoom Out
//
//     </button>
//
//
//
//     const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
//     const data = [{responseData.closePrices},
//     {responseData.openPrices}];
//     const SimpleLineChart = React.createClass({
//     render () {
//     return (
//     <LineChart width={600} height={300} data={data}
//     margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//     <CartesianGrid strokeDasharray="3 3"/>
//     <XAxis dataKey="name"/>
//     <YAxis/>
//     <Tooltip/>
//     <Legend />
//     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} strokeDasharray="5 5" />
//     <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
//     </LineChart>
//     );
// }
// })
//
//     ReactDOM.render(
//     <SimpleLineChart />,
//     document.getElementById('container')
//     );
//
//     <LineChart
//     width={800}
//     height={400}
//     data={data}
//     onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
//     onMouseMove={e => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
//     onMouseUp={this.zoom.bind(this)}
//     >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis
//     allowDataOverflow
//     dataKey="name"
//     domain={[left, right]}
//     type="number"
//     />
//     <YAxis
//     allowDataOverflow
//     domain={[bottom, top]}
//     type="number"
//     yAxisId="1"
//     />
//     <YAxis
//     orientation="right"
//     allowDataOverflow
//     domain={[bottom2, top2]}
//     type="number"
//     yAxisId="2"
//     />
//     <Tooltip />
//     <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
//     <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />
//
//     {
//         (refAreaLeft && refAreaRight) ? (
//             <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
//     }
//     </LineChart>
//
//     </div>
//     );
// }
// }
