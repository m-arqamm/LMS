import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        All course materials, including videos, lectures, handouts, and quizzes, are the intellectual property 
        of the respective instructors or their designated licensors. You may access and use the materials for your personal learning purposes only. 
        Sharing, copying, or distributing any part of the course content without prior written permission is strictly prohibited.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        To enroll in a course, you must create an account and provide accurate billing information. 
        You are responsible for all charges incurred on your account.We offer various payment 
        methods for your convenience. Please review our refund policy before purchasing a course.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Each course has specific requirements for completion, such as watching videos, 
        completing assignments, and passing quizzes.Upon successful completion, you will 
        receive a certificate of completion, a valuable testament to your achievement.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        We foster a respectful and inclusive learning environment. 
        Treat all members of the community with courtesy and avoid any 
        discriminatory or offensive language or behavior.Participate actively 
        in discussions and forums, but stay on topic and refrain from spamming or posting irrelevant content.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Plagiarism and cheating are strictly prohibited. All work submitted must be your own.
        We employ various tools to detect plagiarism and may take disciplinary action, including course 
        suspension or termination, against violators.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        We are here to help! If you have any questions or encounter any technical difficulties, 
        please do not hesitate to contact our friendly support team.
        You can reach us through email, live chat, or phone. We are committed to providing 
        timely and efficient assistance.
        </p>
      </ul>
      </div>
    </div>
  );
};

export default Policy;
