import PageHeading from "../../components/PageHeading/PageHeading";

const About = () => {
  return (
    <div className="container mb-40">
      <PageHeading currentPage="About us" />
      <div className="text-white p-5 md:p-0 flex flex-col md:flex-row gap-10 font-light text-[19px] leading-[40px]">
        <div className="w-full md:w-[50%] text-justify">
          <p>
            After several years of study and experience in the specialized
            fields of cosmetics and health, finally LANOCARE brand unveiled in
            2023. LANOCARE products are prepared and produced using the world’s
            latest science, the best experts, the best raw materials and
            imported compounds from prominent companies of Germany, France and
            Japan, and updated and advanced formulations with the highest
            quality. By passing all the technical tests and standards, the
            manufactured products operate at the highest possible level in a
            completely specialized manner and bring the best results. One of the
            most important achievements of LANOCARE is the sense of
            responsibility towards the public concern, which is to protect the
            environment. LANOCARE uses green packaging and environment-friendly
            packing to solve this concern. Also, these packages are designed in
            such a way that they are very affordable for the consumer and
            completely prevent the wastage of the contents and creams.
          </p>
        </div>
        <div className="w-full md:w-[50%] text-justify">
          <p>
            The slogan of LANOCARE is LANOCARE Beauty Care and in line with the
            slogan, it will launch its new and targeted product collection
            according to the needs of consumers. All in all, the use of special
            and advanced active ingredients at the level of the most prominent
            brands in the world, special packaging and utilizing experts and a
            systematic structure have made the LANOCARE brand a reliable and
            efficient brand.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
