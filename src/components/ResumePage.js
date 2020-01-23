import React from "react";
import { Link } from "react-router-dom";
import ResumeForm from "../Resume/ResumeForm";

const Resume = () => {
  return (
    <div className='box-lo__fm'>
      <div className='fm-lo__box'>
        <Link className='header__title' to='/' />
        <ResumeForm />
      </div>
    </div>
  );
};

export default Resume;
