import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header>Example Header</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus
        quam, minima nesciunt illum ut in. Magni fuga qui velit sapiente
        voluptatum molestias, nam sequi deleniti voluptatibus esse rem, eos in
        commodi placeat tempora exercitationem animi quia laborum perspiciatis
        optio molestiae cumque repellat quaerat. Nulla dolores modi maxime
        doloribus dicta amet temporibus maiores iste? Impedit quisquam aut ullam
        minima, culpa vel architecto porro temporibus nobis beatae sequi maiores
        magni inventore nemo facilis id nam sint aperiam? Maxime possimus at
        consectetur qui quo molestiae distinctio facilis harum minus saepe
        nesciunt fuga incidunt fugiat itaque, error dolores ducimus? Error
        asperiores quaerat corporis eaque omnis corrupti debitis cupiditate
        consectetur. Nisi obcaecati deleniti laboriosam tempore unde. Nulla
        doloribus deserunt, libero illum tempore quidem facere nobis consequatur
        non ex quam, explicabo est, voluptatibus rerum? Iste eos sequi dolorem
        officiis quaerat temporibus facere quos earum modi blanditiis voluptate,
        perferendis consequatur impedit saepe deleniti non id ratione ipsam
        repellendus veritatis esse tenetur amet? Dignissimos recusandae labore
        repellat blanditiis, consequatur possimus officiis sequi, pariatur enim
        impedit sint dicta optio saepe vitae sunt? Cupiditate expedita aut
        sapiente quidem. Optio ex harum nisi sint perferendis similique esse eos
        nesciunt maxime. Maxime magnam unde voluptatibus, laborum nulla
        cupiditate soluta eveniet nihil veniam facilis perspiciatis quidem ad
        quisquam, voluptas, consequuntur maiores odio voluptatem voluptates
        pariatur praesentium rerum! Fuga asperiores magnam sapiente ratione
        dolores repellendus! Incidunt laborum quidem veniam pariatur praesentium
        dignissimos iure ullam quo doloremque deserunt, quisquam sequi ipsa.
        Vero id sed minus atque deserunt consequatur, hic eaque repudiandae
        excepturi accusamus ipsam saepe iste at nam ex, pariatur mollitia. Iusto
        facere aut non vero laudantium commodi nihil porro ratione animi vel.
        Ratione mollitia expedita earum quis nesciunt voluptatum excepturi
        consequuntur blanditiis, iste, sit reiciendis suscipit aliquam ipsa.
        Culpa nesciunt harum voluptatem ut sed, laboriosam, error quis ea nihil
        dolores iure accusamus magni!
      </p>

      <Modal open={showModal} onClose={() => setShowModal(!showModal)} />
      <button onClick={() => setShowModal(!showModal)}>Modal</button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        molestiae iusto odio veritatis voluptas neque! Sit, error pariatur.
        Itaque architecto ducimus voluptas dicta voluptates ut sunt corrupti
        eligendi autem, a repellendus aliquam incidunt impedit fuga voluptate
        sed cumque doloremque. Illum iste doloribus optio architecto
        consequuntur perspiciatis. Consequuntur, perferendis. At quaerat alias
        quia porro est voluptatem quod animi architecto eveniet suscipit earum
        consequatur, quidem ducimus soluta illo esse aspernatur corrupti! Minus
        delectus asperiores nihil in, reiciendis, facilis tempore dignissimos
        quisquam sint est nesciunt eum aliquid pariatur nostrum earum voluptate
        dolores aut nulla veritatis neque cupiditate debitis omnis temporibus
        doloribus? Sint atque consequatur nesciunt tempora in esse, nobis iusto
        excepturi corrupti saepe et itaque. Repellat ut neque, quam dicta animi
        quod error ea beatae praesentium accusamus tempore distinctio asperiores
        sint aperiam fuga enim quibusdam laudantium explicabo commodi
        voluptatibus unde ab, deserunt quisquam. Maiores, nam atque? Sed libero
        ea officiis beatae animi aliquid ullam, quibusdam, asperiores
        consectetur provident quae. Architecto a quos officiis corrupti sed
        alias, dolore illo, quam blanditiis maxime impedit officia voluptatibus,
        cumque ea error enim. Sit perspiciatis laboriosam quo. Iste molestiae
        atque quo rem? Tenetur labore nesciunt accusamus doloribus, velit
        exercitationem nobis atque porro, molestiae non minima sed animi iusto
        perferendis aperiam ipsum odio quibusdam dolore? Laborum, error? Dolorem
        et eaque mollitia iusto vero optio quae quibusdam fuga libero eius, eum
        rem dicta repellat enim aperiam recusandae debitis officia? Consequatur
        harum vero rem dolorem assumenda at. Tenetur neque nisi id totam
        asperiores. Commodi dolores a illum aspernatur consequatur. Neque
        facilis laborum porro quaerat sequi eveniet possimus tempora soluta nemo
        quia itaque alias enim, ab earum rerum suscipit illo obcaecati, sit
        similique? Maiores impedit cupiditate sequi. Minima dolorum commodi
        totam exercitationem ut consectetur unde voluptas error omnis voluptate
        architecto a obcaecati quasi molestias mollitia, ad sapiente cum? Veniam
        totam, labore quae iure ratione, ipsa placeat vitae laboriosam fugiat
        magni suscipit aut, perspiciatis maiores! Quis dolores autem porro. Rem,
        unde quam eum porro temporibus esse voluptate sit distinctio molestias
        cupiditate ratione nisi nam eius, commodi quasi nemo recusandae, magni
        possimus perspiciatis doloribus sapiente dolorem? Sapiente aliquid
        praesentium doloribus eum et sequi blanditiis exercitationem! Doloremque
        eum animi soluta possimus a veritatis, laborum voluptas cum delectus
        sint quia reprehenderit quas laudantium quos fuga aspernatur. Iste,
        excepturi iusto! Molestias, ut! Placeat iure quam corrupti recusandae
        maiores perspiciatis quasi atque sequi, minus, doloremque nemo saepe
        repellendus expedita omnis sint debitis ullam totam blanditiis nobis
        deleniti neque tempora quae vel. Sint vitae, exercitationem harum
        dolores numquam nemo porro quasi facilis debitis esse dolor quaerat,
        necessitatibus commodi expedita. Sed molestiae magni aperiam quis qui
        culpa sit quam iste nobis voluptatum delectus, labore earum ex deleniti
        cum natus incidunt tempora dolorem libero porro veniam. Placeat nostrum
        assumenda voluptate asperiores. Dolore obcaecati qui distinctio
        consequatur officia, eaque id voluptatibus rerum autem possimus quasi
        odio, enim alias ab itaque aliquam quis et ipsa rem veniam dolores
        assumenda? Reiciendis vitae rerum quos. Molestiae, quos commodi
        temporibus suscipit autem laboriosam. Amet, quae? Quas, amet! Voluptates
        assumenda impedit labore voluptate qui, quia iure praesentium!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
        animi at labore, itaque impedit, adipisci veniam non quod optio
        exercitationem ullam. Aliquam, voluptates officiis similique praesentium
        eaque voluptas iusto molestiae doloribus expedita saepe impedit tenetur
        exercitationem laborum nostrum officia recusandae ducimus a neque
        delectus, dignissimos tempore consectetur? Vero magnam nemo omnis
        obcaecati, dolores nisi sit assumenda expedita voluptatem vel libero
        voluptatum voluptate suscipit quaerat laudantium deleniti quam atque!
        Doloribus voluptatem molestiae quidem, commodi maxime odit, natus culpa
        quas sequi ipsa recusandae. Nam nulla laboriosam pariatur perspiciatis
        est reprehenderit accusamus nostrum animi labore earum hic iste nobis
        quam blanditiis ullam, corrupti nemo corporis, aperiam obcaecati fuga
        officiis magnam at deleniti! Reprehenderit quae quas fuga voluptatibus
        consequatur delectus deserunt, doloremque nemo aliquam, repellendus
        quidem error voluptates fugiat tempore dolorem fugit enim ducimus
        similique. Qui ex nulla nemo mollitia eligendi hic quidem, aspernatur,
        dolore molestiae maiores similique quaerat pariatur. Repudiandae ullam
        doloribus veritatis eligendi quod et omnis saepe maxime earum similique
        quaerat, minus illum mollitia quos, sunt esse enim, impedit dolore sed
        aperiam voluptas quo dolores iure consectetur? Error officiis omnis sint
        iste magnam accusantium atque suscipit, laborum quasi quia fugiat veniam
        quisquam maiores nobis mollitia commodi itaque, enim labore blanditiis.
        Ex pariatur deleniti veritatis! Impedit molestiae voluptatem harum
        dolorum voluptatibus rerum obcaecati consequuntur veniam laborum
        exercitationem a, quas illum magnam reprehenderit aspernatur repellendus
        mollitia iste suscipit nulla at qui quos consequatur necessitatibus!
        Aspernatur dolorem amet molestias dignissimos! Rem, id facere adipisci
        modi veniam ipsam maxime perferendis, sint doloremque similique quae
        quia quaerat accusantium suscipit totam ipsa ea dicta minus enim. Ipsa
        fugit incidunt dolores totam fuga eveniet est aliquid nobis tenetur id
        eaque soluta ratione aspernatur sint praesentium at accusantium, ad
        doloremque magni error labore atque eligendi voluptatum? Quam explicabo,
        quod eos laudantium placeat aspernatur assumenda possimus laboriosam
        veritatis exercitationem delectus?
      </p>
    </>
  );
}

export default App;
