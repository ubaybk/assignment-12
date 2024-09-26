const Team = ({ propsTeam }) => {
  return (
    <>
      {propsTeam.map((data, index) => (
        <div key={index} className="mt-8">
          <div>
            {data.titleTeam.map((dataTitle, dataIdx) => (
              <div key={dataIdx}>
                <div className=" flex flex-col justify-center items-center">
                  <h1 className="custom-title mb-5">{dataTitle.title}</h1>
                  <p className="text-center">{dataTitle.desc}</p>
                </div>
              </div>
            ))}

            <div className="md:grid md:grid-cols-3 md:gap-4">
              {data.dataTeam.map((dataTeam, dataIndex) => (
                <div key={dataIndex}>
                  <div className="border-2 p-8 rounded-3xl border-black mt-8 md:h-80">
                    <div className="flex justify-between">
                      <img src={dataTeam.photo} alt="" />
                      <div className="flex flex-col justify-end">
                        <h1>{dataTeam.name}</h1>
                        <h1>{dataTeam.position}</h1>
                      </div>
                      <div className="bg-black w-max h-max p-2 rounded-full">
                        <img src="./img/team/linkedin.png" alt="" />
                      </div>
                    </div>
                    <hr className="border-t-2 my-4 border-black" />
                    <h1>
                      {dataTeam.desc}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Team;
