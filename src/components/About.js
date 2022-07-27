import React from "react";
export default function About(props) {
  return (
    <>
      <h1 className={`text-${props.ThemeMode === "light" ? "dark" : "light"}`}>About us</h1>
      <hr className={`text-${props.ThemeMode === "light" ? "dark" : "light"}`} />
      <h8 className={`text-${props.ThemeMode === "light" ? "dark" : "light"}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam debitis
        non quisquam harum optio, et obcaecati vel repellat, laudantium nulla
        odit repellendus, adipisci voluptatum quam nemo iure similique
        temporibus dolores. Soluta quibusdam ex, totam voluptates distinctio
        iste deleniti itaque quo blanditiis, saepe sit. Officia facere ea minus
        dolor maiores perferendis inventore quas temporibus ipsum, modi
        voluptate nulla laboriosam voluptatum! Enim. Facilis nobis odit
        molestiae maiores quibusdam soluta ab adipisci esse, similique numquam
        exercitationem in porro. In reprehenderit, alias magnam optio modi nulla
        repellat autem cupiditate nihil, eligendi velit facilis suscipit. Soluta
        eos quidem labore repellat facere tenetur tempora enim harum atque quasi
        magnam iure, ab ratione nostrum nam assumenda inventore reiciendis
        adipisci maxime sed. Ea necessitatibus inventore sint libero a?
        Accusantium eligendi eos aut quisquam expedita vero incidunt voluptates
        debitis reprehenderit, enim ipsum saepe nam blanditiis voluptas?
        Voluptate veritatis, numquam incidunt, modi, consequuntur voluptates
        possimus voluptas aut nobis libero molestiae.
      </h8>
    </>
  );
}
