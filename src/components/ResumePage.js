import React from "react";
import { Link } from "react-router-dom";
import ResumeCV from "../resume/ResumeForm";

const ResumePage = () => {
  return (
    <div className='box-lo__fm'>
      <div className='fm-lo__box'>
        <Link className='header__title' to='/' />
        <ResumeCV />
      </div>
    </div>
  );
};

export default ResumePage;
