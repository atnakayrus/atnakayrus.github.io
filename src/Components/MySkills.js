const MySkills = () => {
  return (
    <div className="myProjects section sBlue">
      <div className="skills limit flex-col self-center w-full mx-auto pt-12">
        <div className="mx-auto">
          <p className="text-4xl font-bold text-center">My Skills</p>
          <br />
          <div className="SkillList flex-row flex flex-wrap w-full">
            <div className="flex flex-col w-1/2 WebD skillSection">
                <p className="font-bold text-2xl text-center">
            Front End Web Development Using React
          </p>
          <p className="text-xl">
            {">"}Knowledgeable in front end web development using core html and
            css
          </p>
          <p className="text-xl">
            {">"}good grasp of front end development in react, including some
            backend using firebase as well
          </p>
          <p className="text-xl">
            {">"}Good understanding of User Experience {"(UX)"}
          </p></div>
            <div className="flex flex-col w-1/2 AppD skillSection">
            <p className="font-bold text-2xl text-center">
            Android Development using Flutter
          </p>
          <p className="text-xl">
            {">"}Full Stack android development using Flutter
          </p>
          <p className="text-xl">
            {">"}Good grasp of MaterialUI for Front end and Hive and FireBase
            for Back end
          </p>
            </div>
            <div className="flex flex-col w-1/2 CPDSA skillSection">
            <p className="font-bold text-2xl text-center">
            Competitive Coding using DS and Algorithms
          </p>
          <p className="text-xl">
            {">"}Good grasp of coding foundations such as Data Structures and
            Algorithms
          </p>
          <p className="text-xl">
            {">"}Proficient in languages : Java, Python , C , JavaScript , Dart
            , HTML , CSS
          </p>
          <p className="text-xl">
            {">"}4 star coder {"(highest rating 1927)"} in CodeChef , a
            competitive coding platform
          </p>
            </div>
            <div className="flex flex-col w-1/2 Misc skillSection">
            <p className="font-bold text-2xl text-center">
            Miscellaneous
          </p>
          <p className="text-xl">
            {">"}Data analysis using python, Pandas, NumPy, and matplotlib 
          </p>
          <p className="text-xl">
            {">"}Machine Learning and Artificial Intelligence Basics
          </p>
          <p className="text-xl">
            {">"}Android Game Development Using Unity
          </p>
            </div>
          </div>
          
          <br />
          
          <br />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
