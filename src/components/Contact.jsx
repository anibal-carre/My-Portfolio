const Contact = ({ languageTexts, currentLanguage }) => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        {languageTexts[currentLanguage].contact}
      </h1>
      <form
        action="https://formspree.io/f/meqbayld"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">
              {languageTexts[currentLanguage].form.name}
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">
              {languageTexts[currentLanguage].form.phone}
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">
            {languageTexts[currentLanguage].form.email}
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">
            {languageTexts[currentLanguage].form.subject}
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            {languageTexts[currentLanguage].form.message}
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          {languageTexts[currentLanguage].form.button}
        </button>
      </form>
    </div>
  );
};

export default Contact;
