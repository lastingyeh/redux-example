## Meteor with React Redux Example

 ### 安裝

    1. 產生專案
    
      *meteor create redux-example

    2. 安裝 react redux

    *meteor npm install --save react react-dom redux react-redux redux-thunk

    3. 安裝 meteor mongodb 橋接 react

    *meteor npm install --save react-addons-pure-render-mixin

    *meteor add react-meteor-data

    4. redux action 使用 Meteor.callPromise 使用
    
    *meteor add deanius:promise

### 專案結構

  1. Client 

    main.html (render html畫面位置)

    main.js (程式進入點)

    main.css

  2. Server

    main.js (Mongodb 實體以及方法執行綁定)

  3. imports

    -ui
      
      App.js (實作畫面)

      -action
        widget-actions.js (action)
      
      -reducer
        index.js (reducer combined export)
        widgets.js (reducer state)

    -api

      widgets.js (建立 mongodb 實體 與 存取方法)

### 參考資料

  1.http://www.mhurwi.com/meteor-with-redux/

  2.https://github.com/mhurwi/meteor-with-redux-example



      
  