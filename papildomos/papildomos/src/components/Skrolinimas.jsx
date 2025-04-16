import { useState } from "react";

const Skrolinimas = () => {
  const stylius = {
    height: "200px",
    overflow: "auto",
  };

  const [pozicija, setPozicija] = useState(0);
  const [pozicijaRef, setPozicijaRef] = useState(0);

  const scrollas = (event) => {
    setPozicija(event.target.scrollTop);
    console.log(pozicijaRef, pozicija);

    if (pozicija > 200 && pozicijaRef == 0) {
      setPozicijaRef(pozicija);
      alert("nuslinkai toli");
    } else if (pozicija < 200) {
      setPozicijaRef(0);
    }
  };
  return (
    <div>
      <h2>Skrolinimas</h2>
      <p>Slinkimo pozicija: {pozicija}</p>
      <div style={stylius} onScroll={scrollas}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, in
        amet. Sapiente labore impedit temporibus vel aspernatur eveniet atque ex
        aperiam iure excepturi, delectus ratione natus porro aliquam! Sed
        dolores quas excepturi eaque accusantium nobis quidem modi saepe eius
        voluptatum beatae laborum inventore optio nam, dolorum molestias!
        Sapiente ipsum quibusdam, cupiditate porro voluptatum odit molestias
        fuga modi dolor neque eum eos distinctio, a commodi, numquam alias
        animi! Voluptatum libero eius quos illo tempore, soluta aliquid ab
        iusto? Doloribus, natus aliquid reiciendis rerum impedit quaerat illo
        doloremque, blanditiis voluptas ad beatae maiores. Eligendi tempora
        corporis expedita delectus dicta minima cum, asperiores cupiditate iste
        ab fuga, dolores explicabo. Aliquam dignissimos ratione, hic ipsa
        quisquam veritatis deserunt incidunt corporis eos error est voluptatum
        neque sit? Numquam, iure? Sit, distinctio! Sint fuga quo atque,
        exercitationem quibusdam natus doloribus deleniti dolor odit? Voluptas
        quidem ipsam, delectus, laudantium autem natus pariatur nesciunt quasi
        mollitia nobis illum commodi error tenetur! Repudiandae, nulla, velit
        excepturi aliquid tempora temporibus magni maiores debitis assumenda
        magnam enim iure. Porro quos illo, animi blanditiis tempore eligendi
        inventore facilis in maxime sequi eius nesciunt nobis non culpa veniam,
        voluptates rem, eaque sint. Ab animi, nesciunt necessitatibus illo
        libero consectetur rem optio ipsam aliquam a nobis porro! Corrupti
        voluptatem esse id praesentium reiciendis quas minima aut earum repellat
        quibusdam sapiente impedit dicta tempore dignissimos, perspiciatis
        veritatis molestiae ex deserunt unde at? Natus ratione, ullam animi,
        maxime, reiciendis repellat nam qui id totam ipsa libero dicta deserunt
        quos rem velit praesentium nobis fuga! Nemo repudiandae modi rerum
        tenetur ipsa quas consectetur dolorum ratione, dolor similique qui
        deserunt adipisci quasi, cum placeat perferendis repellendus iure at
        laudantium quo officia veritatis. Repellendus dolor optio aperiam
        placeat fugit? Dolorem nam debitis numquam aut eveniet ipsa cum neque
        facere asperiores laudantium quas beatae, nihil esse illo maxime
        accusamus. Suscipit libero delectus quas, ab aliquam eligendi natus quo
        fugit quisquam voluptatum ducimus molestiae recusandae aut autem in
        sapiente nostrum iure commodi minima debitis ipsam. Voluptate ut
        aspernatur beatae, totam quod magni ipsam ullam tempora id sequi eaque
        quam magnam impedit in quibusdam. Cupiditate, repellat voluptatem cum
        non illum quasi quod dolorem officia iusto aperiam. Sit facilis
        distinctio magni unde nam voluptas quos dolor possimus, reprehenderit
        nemo officiis, ad inventore, maiores asperiores nisi velit doloremque.
        Culpa fugiat ut esse eum sequi? Est, quasi. Dolore perferendis ad
        corporis facere consequuntur, in nihil dolorem sed neque error ipsa.
        Totam nam maxime at sint! Facilis tempora facere nulla delectus non
        earum voluptas officia alias, excepturi dolores eos doloremque odio ex
        libero deleniti odit temporibus quaerat blanditiis dolor. Accusantium
        suscipit impedit quasi consequatur totam sit enim aspernatur accusamus?
        Aliquid aliquam minima aperiam sequi ex eligendi qui alias aspernatur?
        Est accusantium nulla illo, quam, molestias eius tenetur sequi libero
        eveniet minus eaque. Pariatur accusamus omnis rem explicabo placeat
        ullam unde beatae obcaecati, ab repellat quod quos aliquid natus
        exercitationem earum consectetur iste, alias impedit sapiente
        laboriosam? Est fugiat modi adipisci ab delectus inventore deserunt
        eaque. A deserunt hic quibusdam ullam, corporis amet aliquam deleniti
        possimus id earum consequuntur. Quisquam dolor illo impedit laudantium
        error architecto explicabo optio laboriosam corrupti perferendis! Ipsa
        deleniti aspernatur ab dolorum distinctio sed sit maiores, obcaecati
        libero, autem eveniet ratione vel excepturi labore consectetur eius quas
        eligendi reprehenderit vero architecto. Placeat reiciendis in
        voluptatibus quaerat sint totam cumque, dignissimos repellat laborum
        officiis rem praesentium nam assumenda cupiditate ratione voluptas
        aliquam facere sapiente atque inventore. Nam, quasi, hic nihil sequi
        eius officia voluptates, animi necessitatibus aliquam explicabo quo
        sapiente quam facere ratione. Aspernatur totam facilis neque quos
        expedita perspiciatis optio quis, incidunt nam dicta quas facere laborum
        quae dignissimos rem in omnis magni vel a inventore quasi, eos,
        consectetur dolor. Quo suscipit, ad assumenda rem veritatis enim
        excepturi, repellendus mollitia cupiditate perspiciatis neque
        accusantium inventore saepe! Assumenda sequi facere, iure quaerat
        mollitia cupiditate inventore maxime nam consectetur quidem repellat
        vel, culpa praesentium voluptate reiciendis nobis neque sed dicta, at
        unde fugiat animi! Perspiciatis voluptas quos commodi ut a vitae dolor
        ad natus, quidem blanditiis voluptate reiciendis id numquam tempora quam
        provident itaque neque libero saepe? Consequuntur saepe nostrum autem!
        Magni debitis aliquid, et, blanditiis eos maiores dolores ut ducimus
        aliquam voluptas tempore animi porro repellat odit qui at consectetur
        minus, sunt praesentium? Veniam eaque quasi voluptatem tenetur animi
        cum. Sed ducimus, magnam facere fuga, minima rerum praesentium ratione
        minus molestias ipsum placeat libero velit doloribus odit, iure
        molestiae harum perferendis ad maxime error sunt cumque. Velit ea rem
        perspiciatis accusamus dicta dolor libero, fugit eum. Eligendi
        temporibus voluptas sapiente nisi ex numquam repudiandae repellat
        maiores distinctio earum corrupti esse, dignissimos iusto laborum vero.
        Delectus ad doloribus alias dicta, ipsum nemo, possimus animi explicabo
        voluptatem sit ducimus! Placeat eum velit fugiat, saepe vel veniam
        incidunt maiores explicabo perferendis in assumenda recusandae debitis
        ex. Saepe architecto accusamus odio quisquam atque laudantium sit eos
        quas ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium nobis quaerat harum eligendi officiis. Expedita temporibus,
        dignissimos aspernatur ut nemo quis, animi repellat quas omnis nostrum
        aliquam reiciendis qui harum rerum molestias! Tempora, quasi? Asperiores
        ipsum magnam obcaecati dignissimos sint perferendis, earum rem quasi,
        odio vel et, a quod non iure nesciunt. Quas sunt officiis adipisci
        minima repellendus eveniet dolorem magni, temporibus, commodi deleniti
        dicta. Non ullam et temporibus ex maiores in sunt quaerat harum quae,
        sapiente vero eveniet officia nihil earum voluptas dolorum minima
        corrupti asperiores libero. Molestias fugiat laudantium dolorum
        voluptatibus at commodi natus exercitationem, obcaecati repellat
        repellendus facilis harum! Sequi nobis aliquid quis nemo, optio cumque
        animi corrupti, repellendus accusamus perspiciatis itaque illo natus
        iste commodi dolore ipsam quae a officiis. Rem est cupiditate quibusdam
        molestias mollitia incidunt saepe aperiam voluptatum unde eius debitis
        impedit nisi repudiandae molestiae ullam ratione voluptate optio
        voluptates itaque, delectus dolor, consectetur cumque eligendi nesciunt?
        Unde eos tempore vitae libero. Molestias aut accusamus perferendis
        pariatur, rerum id at maiores neque odio impedit! Ad mollitia ratione
        animi dolore rerum eveniet quisquam quaerat pariatur molestiae omnis?
        Earum mollitia placeat vitae, libero aspernatur sequi ipsa perferendis
        corrupti voluptatem quod nam error dolore fugiat obcaecati, similique
        explicabo rem distinctio eligendi nulla tempora cumque. Dolorum
        consectetur numquam quis culpa nesciunt quae tempore sequi incidunt
        praesentium laboriosam, repellendus asperiores doloremque necessitatibus
        sapiente consequatur accusamus, ipsam, assumenda ut enim corporis
        delectus dolorem mollitia. Velit ipsum quos suscipit perspiciatis
        dolorem ex placeat, voluptas alias illo incidunt nihil repellendus
        voluptates cum asperiores vitae quam omnis sit laborum excepturi. Error
        rerum officiis eum qui debitis itaque consectetur repudiandae quod
        deserunt tempore libero asperiores dolores fugiat minima ipsa quas
        tempora unde ad, dolore deleniti? Consequatur in vel neque quasi aperiam
        enim earum porro alias nobis, distinctio quos hic iste pariatur placeat
        fugit doloribus.
      </div>
    </div>
  );
};

export default Skrolinimas;
