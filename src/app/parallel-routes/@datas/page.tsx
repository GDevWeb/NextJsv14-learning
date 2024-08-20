import Loading from "@/app/components/layout/navBar/Loading";
import { Suspense } from "react";
import wait from "wait";

const DatasPage = async () => {
  await wait(10000);

  return (
    <Suspense fallback={<Loading />}>
      <section>
        <h1>DatasPage Section</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          molestiae? Minus odit debitis, quibusdam adipisci libero quae quia
          nulla porro animi ipsam dolorum, amet voluptate aut assumenda vitae
          voluptates non quasi quas inventore numquam? Eos nam velit magnam sit
          doloribus laboriosam eum, commodi deleniti, possimus iure saepe autem
          perspiciatis fugit? Omnis, beatae laborum consequatur deserunt
          recusandae eveniet tempora qui quae molestiae cupiditate explicabo
          inventore in reprehenderit facere accusamus perspiciatis harum nobis
          ut ea. Placeat, numquam deserunt distinctio eius expedita vero ratione
          dolores dolor corrupti, dolore maxime laudantium alias quas possimus
          obcaecati inventore delectus cum eveniet at nam molestiae accusantium
          nemo nihil reiciendis. Cupiditate quis, eveniet praesentium beatae
          nulla tempora amet. Officiis sed in fuga architecto. Nihil earum sint
          animi porro tenetur deleniti illum, dolore dolorum reprehenderit quos
          iure aspernatur nisi exercitationem rem accusamus voluptas, distinctio
          suscipit dignissimos! Sit aliquid sunt placeat illum deleniti
          veritatis itaque facilis nostrum beatae recusandae quasi tenetur,
          obcaecati deserunt corporis ipsa laboriosam sequi repellat, blanditiis
          qui ab accusamus nisi! Architecto voluptates quos culpa? Veniam
          aperiam iure, veritatis corrupti accusantium commodi, culpa distinctio
          esse rerum atque sapiente qui animi quas ex recusandae quae quod
          consectetur. Libero, ullam ea ipsa fugiat velit nam repudiandae
          eligendi natus id reiciendis omnis labore! Odit eaque, saepe voluptate
          at delectus totam, necessitatibus consequatur hic aperiam nam, dolor
          rerum? Saepe ea veritatis recusandae consequuntur neque accusamus
          magnam non in eaque tenetur excepturi, eos sint inventore quia cum
          eveniet nisi nihil autem provident vitae sapiente temporibus explicabo
          suscipit? Odio voluptates numquam aut neque est, magni nihil labore
          aperiam soluta, alias sint porro eum quos ullam. Sed veritatis alias
          inventore natus sunt nostrum placeat? Exercitationem quam dolorem
          suscipit? Vitae quisquam autem, nemo aspernatur ducimus quo deleniti
          rerum porro? Itaque, similique quod porro, eius beatae iusto nesciunt
          veniam totam aliquam, commodi esse omnis impedit odio doloremque.
          Officiis, explicabo. Eos cum facilis voluptate amet autem quod saepe,
          tempora fugit incidunt ea voluptas voluptates eligendi consectetur
          ducimus soluta ab itaque ullam aspernatur? Atque voluptates at sequi
          autem ad, labore dolore inventore dolores architecto error voluptas
          unde libero deserunt, possimus praesentium quasi ut temporibus velit
          nihil! Corrupti minus illo harum, nobis deleniti voluptates tenetur,
          quia perspiciatis a, consectetur nesciunt facere sed! Saepe ad alias
          voluptatem eveniet sapiente beatae, provident id magni tempora
          ratione. Pariatur impedit eos ea ipsum fugit rerum numquam asperiores
          natus perferendis provident sed nostrum quos facilis nemo earum libero
          minus, quam doloremque cumque ut blanditiis laborum. Necessitatibus
          qui illo obcaecati officiis sequi nobis recusandae optio veniam
          architecto odio ipsum, nulla vero dicta aspernatur delectus voluptate
          repudiandae ipsam sunt earum animi aliquam minima harum. Harum
          accusantium molestiae eius, possimus earum modi quae cumque sit nobis
          est, rem porro aperiam animi repellendus hic consequuntur accusamus
          eos. Rerum cumque, dolor consectetur modi ducimus eius soluta nihil
          quam porro veniam magni expedita debitis molestias explicabo eos rem
          id. Magnam ratione mollitia, rerum nesciunt reprehenderit eum tempore
          perspiciatis nulla placeat inventore porro consequatur? Sapiente
          beatae dolorem distinctio voluptatum unde sequi eos quod obcaecati!
          Eum consequuntur, voluptatibus molestias quos voluptates corporis
          corrupti!
        </p>
      </section>
    </Suspense>
  );
};

export default DatasPage;
