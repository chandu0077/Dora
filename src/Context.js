import { createContext, useCallback, useEffect, useReducer } from "react";

// Create Context
const DoraContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  COLOR: "COLOR",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
  ABOUT: "ABOUT",
  SERVICE_DATA: "SERVICE_DATA",
  SKILLS: "SKILLS",
  FEEDBACK_DATA: "FEEDBACK_DATA",
  PROJECTS_DATA: "PROJECTS_DATA",
  SOCIAL_HANDLES_DATA: "SOCIAL_HANDLES_DATA",
};
const {
  BLOG,
  COLOR,
  PORTFOLIO_MODAL,
  ABOUT,
  SERVICE_DATA,
  SKILLS,
  FEEDBACK_DATA,
  PROJECTS_DATA,
  SOCIAL_HANDLES_DATA,
} = type;

// Initial Value
const initialState = {
  color: "yellow",
  blog: null,
  blogs: [
    {
      id: 1,
      date: "23 Oct 2022",
      img: "images/blog/1.png",
      title: "User interface design or user interface engineering",
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "images/blog/2.png",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "images/blog/3.png",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
  ],
  about: null,
  services: null,
  skills: null,
  feedbacks: null,
  social_handles: null,
  portfolio_modal: false,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case ABOUT:
      return {
        ...state,
        about: payload,
      };
    case SERVICE_DATA:
      return {
        ...state,
        services: payload,
      };
    case SKILLS:
      return {
        ...state,
        skills: payload,
      };
    case FEEDBACK_DATA:
      return {
        ...state,
        feedbacks: payload,
      };
    case PROJECTS_DATA:
      return {
        ...state,
        projects: payload,
      };
    case SOCIAL_HANDLES_DATA:
      return {
        ...state,
        social_handles: payload,
      };
    default:
      return state;
  }
};

// Watson State
const DoraState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
    ).then((res) => {
      res.json().then((result) => {
        console.log("RESULT", result);
        dispatch({
          type: ABOUT,
          payload: result.user.about,
        });
        dispatch({
          type: SERVICE_DATA,
          payload: result.user.services,
        });
        dispatch({
          type: SKILLS,
          payload: result.user.skills,
        });
        dispatch({
          type: FEEDBACK_DATA,
          payload: result.user.testimonials,
        });
        dispatch({
          type: PROJECTS_DATA,
          payload: result.user.projects,
        });
        dispatch({
          type: SOCIAL_HANDLES_DATA,
          payload: result.user.social_handles,
        });
      });
    });
  };

  // API CALL
  useEffect(() => {
    getData();
  }, []);

  // Page Color
  const colorChange = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const blogDetails = useCallback((value) => {
    dispatch({
      type: BLOG,
      payload: value,
    });
  }, []);

  const portfolio_modal_show = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_MODAL,
      payload: value,
    });
  }, []);

  const {
    color,
    blog,
    blogs,
    portfolio_modal,
    about,
    services,
    skills,
    feedbacks,
    projects,
    social_handles,
  } = state;
  return (
    <DoraContext.Provider
      value={{
        color,
        colorChange: colorChange,
        blogs: blogs,
        blog: blog,
        blogDetails: blogDetails,
        portfolio_modal: portfolio_modal,
        portfolio_modal_show: portfolio_modal_show,
        about: about,
        services: services,
        skills: skills,
        feedbacks: feedbacks,
        projects: projects,
        social_handles: social_handles,
      }}
    >
      {children}
    </DoraContext.Provider>
  );
};

export default DoraState;
export { DoraContext };
