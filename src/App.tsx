import React from "react";
import jumbotronBackground from "./assets/hotel_lounge.jpg";

function App() {
  var jumbotron = {
    background: `url(${jumbotronBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="App">
      <a id="skippy" className="sr-only sr-only-focusable" href="#content">
        <div className="container">
          <span className="skiplink-text">Skip to main content</span>
        </div>
      </a>

      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
        <nav className=" my-md-0 mr-md-3 navbar navbar-light bg-white fixed-top">
          <a className="navbar-brand text-danger" href="#">
            HOTEL LEOLA
          </a>
          <div className="ml-auto mr-3">
            <a className="p-2 text-dark " href="#">
              予約する
            </a>
            <a className="p-2 text-dark" href="#">
              お問い合わせ
            </a>
            <a className="p-2 text-dark" href="#">
              SNS
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  お部屋のご案内 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  アクセス <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container mt-5">
        <a href="#" className="text-dark font-weight-bold">
          →TOP
        </a>
        <div className="jumbotron jumbotron-fluid" style={jumbotron}>
          <div className="container">
            <div className="row">
              <div className="col-4 pl-5  ">
                <h1 className="display-4">CONTACT</h1>
                <p className="lead font-weight-bold text-nowrap">お問い合わせ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-7 my-5">
            <p className="text-center">
              各種お問い合わせにつきまして、下記お問合せフォームをご使用ください。
              <br />
              必須項目をご入力の上送信ボタンを押して下さい。
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group row">
                <div className="col-sm-11">
                  <input type="text" className="form-control" id="name" placeholder="お名前" required />
                </div>
                <label className="col-sm-1 col-form-label" htmlFor="name">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>

              <div className="form-group row">
                <div className="col-sm-11">
                  <input type="text" className="form-control" id="kana" placeholder="フリガナ" required />
                </div>
                <label className="col-sm-1 col-form-label" htmlFor="kana">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>
              <div className="form-group row">
                <div className="col-sm-11">
                  <input type="email" className="form-control" id="email" placeholder="メールアドレス" required />
                </div>
                <label className="col-sm-1 col-form-label" htmlFor="kana">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>
              <div className="form-group row">
                <div className="col-sm-11">
                  <input type="tel" className="form-control" id="tell" placeholder="電話番号" required />
                </div>
                <label className="col-sm-1 col-form-label" htmlFor="kana">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>
              <div className="form-group row">
                <div className="col-sm-11">
                  <input type="tel" className="form-control" id="address" placeholder="郵便番号" required />
                </div>
                <label className="col-sm-1 col-form-label" htmlFor="kana">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>
            </div>
          </div>
          {/* /row */}
          <div className="row justify-content-center">
            <div className="col-6 my-2">
              <p>御住所</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <div className="form-group">
                <input type="text" className="form-control" id="city" placeholder="都道府県" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="area" placeholder="市区町村" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="block" placeholder="丁目番地" />
              </div>
            </div>
          </div>
          {/* /row */}
          <div className="row justify-content-center ">
            <div className="col-6 form-inline border-bottom border-dark my-2">
              <div className="mr-4">
                <span>
                  ご連絡の折り返し方法 <span className="badge badge-danger">必須</span>
                </span>
              </div>
              <div className="form-check mr-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="feedBack"
                  id="feedBack1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" htmlFor="feedBack1">
                  電話番号
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="feedBack" id="feedBack2" value="option2" />
                <label className="form-check-label" htmlFor="feedBack2">
                  メール
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ml-3">
            <div className="col-6 mt-3">
              <div className="form-group">
                <div className="col-11">
                  <textarea className="form-control" id="inquiry" placeholder="お問い合わせ内容" rows={6} />
                </div>
                <label className="col-1 col-form-label" htmlFor="inquiry">
                  <span className="badge badge-danger">必須</span>
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5 ml-sm-3">
            <div className="col-2 ">
              <button type="submit" className="btn btn-primary btn-lg text-nowrap">
                送信
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* container */}
      <div className="container  py-5">
        <div className="row justify-content-center ">
          <div className="col-6">
            <div className="">
              <h3 className="text-center text-danger mr-lg-4 ">HOTEL LEOLA</h3>
              <p className=" ml-md-5 pl-lg-3 pl-xl-5">
                <span className="text-nowrap">〒xxx-xxxx 大阪市東成区東小橋 1-3-4</span>
                <br />
                TEL:XXX-XXXX-XXXX MAIL:XXXXXXX@XXXXX
                <br />
                <span className="text-nowrap">JR 大阪環状線　玉造駅より徒歩１分</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="my-3 ml-3 mr-lg-5">
            <button type="button" className="btn btn-dark btn-lg text-nowrap">
              <div className="border-bottom">CONTACT</div>
              <div>お問い合わせ</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
