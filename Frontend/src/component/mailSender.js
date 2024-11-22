import { useEffect, useState } from "react";
export const MailSender = () => {
  const [mail, setMail] = useState({
    // form: "shekhargarud292@gmail.com",
    to: "",
    subject: "",
    message: "",
    file: "",
  });

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  const sendMail = async function (e) {
    e.preventDefault();
    const response = await fetch(
      // "http://localhost:9998/send_mail/?message=he",
      "http://localhost:9998/src/node_mailer/send_mail/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mail),
      }
    );
    const data = await response.json();
    console.log(data);

    // setMail({
    //   form: "shekhargarud292@gmail.com",
    //   to: "",
    //   subject: "",
    // });
  };

  return (
    <>
      <div>
        <h5>New Message</h5>
        <form
          className="border  p-3"
          onSubmit={(e) => {
            sendMail(e);
          }}
        >
          <div>
            <p>From : shekhargarud292@gmail.com</p>
          </div>
          <div className="d-flex">
            <div className="pe-4 d-flex flex-column">
              <label htmlFor="to" className="pb-2">
                To:
              </label>
              <label htmlFor="subject" className="pb-2">
                Subject:
              </label>
              <label htmlFor="subject" className="pb-2">
                Message:
              </label>
              <label htmlFor="fileInput" className="pb-2">
                Choose a file:
              </label>
            </div>
            <div className="pe-4 d-flex flex-column col-4">
              <input
                onChange={(e) => {
                  setMail({
                    ...mail,
                    to: e.target.value,
                  });
                  // console.log(mail);
                }}
                type="text"
                className="mb-1"
                id="to"
                placeholder="Recipients"
                name="to"
                required
              />
              <input
                onChange={(e) => {
                  setMail({
                    ...mail,
                    subject: e.target.value,
                  });
                  console.log(e);
                }}
                type="text"
                className="mb-1"
                id="subject"
                placeholder="Subject"
                name="subject"
                required
              />
              <input
                onChange={(e) => {
                  setMail({
                    ...mail,
                    message: e.target.value,
                  });
                  // console.log(e);
                }}
                type="text"
                className="mb-1"
                id="subject"
                placeholder="Subject"
                name="subject"
                required
              />
              <input
                onChange={(e) => {
                  const filed = e.target.files[0];
                  console.log(filed);

                  if (filed) {
                    setMail({
                      ...mail,
                      file: {
                        fileName: filed.name,
                        fileSize: filed.size,
                        fileType: filed.type,
                      },
                    });
                  }

                  // console.log(e);
                }}
                type="file"
                id="fileInput"
                name="file"
                className="mb-1"
              />
            </div>
          </div>
          <div>
            <button type="Send" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
