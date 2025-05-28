const Showcase = () => {
  return (
    <section className="showcase" id="showcase">
      <div className="showcase-text">
        <h1>Greetings!</h1>
        <h3>My name is Ilmar Vodi and welcome to my portfolio.</h3>
        <p>
          I am a student at Tartu Rakenduslik Kolledž, studying web development,
          software engineering, and design. I have a passion for coding and creating
          things. Feel free to scroll down to explore my work.
        </p>
      </div>
      <div className="showcase-image">
        <img src={profileImg} alt="Ilmar Vodi" />
      </div>
    </section>
  );
};

export default Showcase;