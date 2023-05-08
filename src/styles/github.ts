import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 20px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 30px - 60px);
  overflow-y: auto;
  background-color: #010409;
  /* background-color: #21262d;  */

  a {
    text-decoration: none;
  }

  .mostUsedLanguages {
    margin-top: 8px;

    picture > img {
      width: 350px;
    }
  }

  .calendar {
    margin-top: 20px;
    h3 {
      color: #fff;
    }
  }

  @media screen and (max-width: 600px) {
    .streakStats {
      picture > img {
        width: 400px;
      }
    }
    .mostUsedLanguages {
      margin-top: 8px;

      picture > img {
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem 10px 50px 10px;

    .streakStats {
      picture > img {
        width: 300px;
      }
    }
    .mostUsedLanguages {
      margin-top: 8px;

      picture > img {
        width: 200px;
      }
    }

    .calendar {
      font-size: small;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 1.5rem 10px 50px 10px;
    .streakStats {
      picture > img {
        width: 280px;
      }
    }
    .mostUsedLanguages {
      margin-top: 8px;

      picture > img {
        width: 180px;
      }
    }

    .calendar {
      font-size: small;
    }
  }

  @media screen and (max-width: 375px) {
    padding: 1.5rem 7px 50px 7px;
    .streakStats {
      picture > img {
        width: 250px;
      }
    }
    .mostUsedLanguages {
      margin-top: 8px;

      picture > img {
        width: 150px;
      }
    }

    .calendar {
      font-size: small;
    }
  }


  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #343746;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #21222c;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(30, 138, 189);
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;

  h3 {
    color: #fff;
    font-size: x-large;
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: large;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  max-width: 180px;
  max-height: 180px;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid rgb(30, 138, 189);
  margin-bottom: 10px;


  @media screen and (max-width: 700px) {
    max-width: 150px;
    max-height: 150px;
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 600px) {
    max-width: 100px;
    max-height: 100px;
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 500px) {
    max-width: 90px;
    max-height: 90px;
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 400px) {
    border: 3px solid rgb(30, 138, 189);
    max-width: 80px;
    max-height: 80px;
    width: 80px;
    height: 80px;
  }
`;

export const Contributions = styled.div`
  border: 1px solid #30363d;
  position: relative;
  border-radius: 5px;
  padding: 10px 10px;
  color: #e6edf3;
  background-color: #0d1117;
  border-spacing: 4px;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  line-height: 1.5;

  .styles-module_calendar {
    fill: #32587f;
  }

  .react-activity-calendar__footer {
    padding: 0 15px;
  }

  @media screen and (max-width: 500px) {
    .react-activity-calendar__count {
      font-size: smaller;
    }

    .react-activity-calendar__legend-colors {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 450px) {
    .react-activity-calendar__footer {
      padding: 0 5px;
    }

    .react-activity-calendar__count {
      font-size: x-small;
    }

    .react-activity-calendar__legend-colors {
      font-size: x-small;
    }
  }

  @media screen and (max-width: 375px) {
    .react-activity-calendar__count {
      font-size: 8px;
    }

    .react-activity-calendar__legend-colors {
      font-size: 8px;
    }
  }
`;
