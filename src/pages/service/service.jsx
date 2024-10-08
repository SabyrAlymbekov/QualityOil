import Path from "@components/path/path.jsx";
import {NavLink} from "react-router-dom";
import '@/pages/service/service.sass'
import OnlineOrder from "@components/OnlineOrder/OnlineOrder.jsx";
import engineoil from '@assets/engineoil.png'
import oilchange from '@assets/oilchange.png'

export default function ServicePage() {
    return <div className="service container">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to='/service'>Сервис</NavLink>]}></Path>
        <h1 className="heading">Сервис обслуживания</h1>
        <h1>Доверьтесь сотрудникам центра замены масел «QUALITY АВТОСЕРВИС»</h1>
        <img src={oilchange} alt="Моторное масло" className="oil-image" loading="lazy"/>
        <p>Вы приобрели дорогой автомобиль, и Вам хотелось бы, чтобы эти затраты были оправданы длительным сроком
            службы? Вам не нужны приключения с неисправностями на дороге?</p>
        <p>Тогда доверьтесь сотрудникам центра замены масел «QUALITY АВТОСЕРВИС», чтобы вовремя получать лучший сервис
            для вашего автомобиля от профессионалов своего дела.</p>

        <h2>Качественная замена масла в двигателе</h2>
        <p>Опытные и квалифицированные сотрудники центра «QUALITY АВТОСЕРВИС» подберут подходящее именно вашему
            автомобилю масло, фильтры и технические жидкости. Замена масла и фильтров авто в двигателе, а также замена
            масляного фильтра чрезвычайно важны для безукоризненной работы. Важно, чтобы замена масляного фильтра
            осуществлялась вовремя, ведь это позволит избежать неприятностей.</p>
        <p>Мы предлагаем моторные масла ведущих производителей по доступным ценам. В нашем ассортименте масла только
            проверенных брендов.</p>

        <h2>Как часто двигателю требуется замена масла на СТО</h2>
        <p>Хотя для каждого автомобиля следует отдельно определять сроки замены масла, есть общие рекомендации.
            Производители авто предлагают производить замену масла в двигателе через 7000–15000 км пробега, в отдельных
            случаях - после 50000 км. Кроме пробега, на сроки замены масла влияют:</p>
        <ul className="service__ul">
            <li className="service__li">Эксплуатационные условия</li>
            <li className="service__li">Характер вождения</li>
            <li className="service__li">Качество масла</li>
            <li className="service__li">Наличие в нем нежелательных примесей, в частности, включения серы</li>
        </ul>
        <p>Наша компания - ваша гарантия спокойствия за автомобиль, ведь мы выполняем свою работу на высочайшем уровне,
            в срок и с учетом всех пожеланий клиента.</p>

        <h2>Замена топливного фильтра в «QUALITY АВТОСЕРВИС»</h2>
        <p>С каждым нажатием на педаль газа в двигатель попадает сбалансированное соединение топлива и воздуха. Важно,
            чтобы баланс был идеальным, за этот пункт отвечает дроссельная заслонка. Компьютерная система определяет
            состав воздушно-топливной массы и подает топливо в определенный момент и в определенном количестве. Перед
            подачей в камеру сгорания цилиндров двигателя, тщательно смешиваются выверенный объем воздуха и определенное
            количество топлива. Эта смесь поджигается при помощи свеч сгорания, в результате чего происходит
            контролируемое сгорание. Этот процесс дает автомобилю энергию для движения.</p>
        <p>Для беспроблемного протекания этого процесса особенно важно использовать исключительно чистые качественные
            масла, в которых отсутствуют нежелательные примеси. Для уверенности в чистоте топлива используются фильтры.
            Как правило, замена топливного фильтра производится каждые 20000–30000 км, другими словами, с каждой второй
            заменой моторного масла.</p>
        <p>Замена топливного фильтра - гарантия уверенной работы вашего автомобиля без сбоев и проблем!</p>

        <h2>Замена воздушного фильтра в «QUALITY АВТОСЕРВИС»</h2>
        <p>Воздушный фильтр предназначен для очистки воздуха, поступающего в двигатель, от пыли. Это необходимо для
            поддержания его ресурса и высокого качества топливовоздушной смеси.</p>
        <p>Попадающий в двигатель воздух содержит всевозможные примеси в виде пыли, грязи, пыльцы растений и насекомых.
            Попадая в необорудованный воздушным фильтром двигатель, пыль, проходя через клапаны, приводит их в
            непригодное состояние. Затем, смешиваясь с маслом, она, в конечном счете, становится абразивной пастой,
            которая сильно изнашивает цилиндропоршневую группу.</p>
        <p>Загрязненный фильтр плохо пропускает через себя воздух. Именно поэтому смесеобразование в двигателе
            происходит неэффективно. При этом увеличивается расход топлива и снижается мощность. Особенно это
            сказывается на автомобилях, работающих на газе.</p>
        <p>Некоторые автовладельцы полагают, что достаточно лишь очистить фильтр и продолжать осуществлять его
            эксплуатацию. Но всё не так просто. Простой очистки загрязненного воздушного фильтра недостаточно, так как
            мелкие частицы пыли проникают глубоко внутрь бумаги фильтрующего элемента. Загрязнения препятствуют подаче в
            двигатель необходимого количества воздуха.</p>
        <p>Замена воздушного фильтра рекомендуется примерно через каждые 30000 км. Для автомобилей, эксплуатируемых в
            запыленных условиях и на гравийных дорогах, такую процедуру требуется проводить чаще.</p>
        <p>В нашем центре «QUALITY АВТОСЕРВИС» можно провести визуальный осмотр воздушного фильтра и при необходимости
            заменить его.</p>
        <OnlineOrder></OnlineOrder>
        <div className="service__cards">
            <div className="service__card">
                <h2 className="service__card__heading">
                    Замена масла в коробке передач в «QUALITY АВТОСЕРВИС»
                </h2>
                <p className="service__card__p">
                    Коробка передач – это наиболее устойчивая часть автомобиля. Поломки КПП встречаются гораздо реже
                    поломок
                    других частей транспортного средства. Главный фактор поддержания коробки передач в исправном
                    состоянии –
                    это надлежащее качество в ней масла.
                </p>
                <p className="service__card__p">
                    Коробка передач служит для получения мощности ведущими колесами от двигателя, для изменения
                    передаточного числа, а также обеспечения оптимального режима работы двигателя в различных условиях
                    движения.
                </p>
                <OnlineOrder></OnlineOrder>
            </div>
            <div className="service__card">
                <h2 className="service__card__heading">
                    Замена масла в механической КПП в «QUALITY АВТОСЕРВИС»
                </h2>
                <p className="service__card__p">
                    В механических КПП водитель вручную выбирает необходимую передачу. Система смазки достаточно
                    простая: залив и контроль масла в большинстве случаев осуществляется через одну пробку. Она бывает
                    заливная и контрольная одновременно.
                </p>
                <p className="service__card__p">
                    Трансмиссионное масло обеспечивает смазку шестерен, подшипников, валов и других внутренних
                    компонентов. Тепло и трение постепенно приводят к уменьшению защитного действия присадок в масле.
                    Кроме того, мелкие частицы металла могут оторваться от шестерен по мере их износа. В связи с этим
                    данные частицы могут находиться в самом масле. Также возможно попадание в масло воды и ухудшение его
                    защитных свойств.
                </p>
                <p className="service__card__p">
                    Поэтому, если производителем не рекомендован более частый интервал замены масла в коробке передач,
                    масло в механической КПП должно заменяться не реже, чем через каждые 60 тыс. км.
                </p>
                <OnlineOrder></OnlineOrder>
            </div>
            <div className="service__card">
                <h2 className="service__card__heading">
                    Замена масла в АКПП в «QUALITY АВТОСЕРВИС»
                </h2>
                <p className="service__card__p">
                    Автоматическая коробка переключения передач устроена гораздо сложнее механической, поэтому более
                    требовательна к обслуживанию. Масло для автоматических трансмиссий смазывает, охлаждает и очищает
                    внутренние компоненты трансмиссии. Оно также помогает поддерживать гидравлическое давление,
                    необходимое для работы коробки передач. Со временем (эта жидкость деградирует(масло теряет свои
                    свойства)), а качество смазки ухудшается. Замена масла в автоматической КПП является важным этапом
                    проведения технического обслуживания автомобиля. Своевременная замена масла в автоматической КПП
                    поможет предотвратить преждевременный износ и повреждения трансмиссии. При замене масла картер
                    очищается от загрязнений, металлических частиц, а также заменяется фильтр АКПП.
                </p>
                <p className="service__card__p">
                    Мы рекомендуем постоянно контролировать уровень масла в КПП и держать его на должном уровне для
                    долговечной работы узла.
                </p>
                <OnlineOrder></OnlineOrder>
            </div>
            <div className="service__card">
                <h2 className="service__card__heading">
                    Замена салонного фильтра в «QUALITY АВТОСЕРВИС
                </h2>
                <p className="service__card__p">
                    Окружающий воздух загрязнен массивным количеством пыли, газов, пыльцой растений и иным вредным
                    «мусором», вызывающим ухудшение состояния автовладельца. Своевременная замена салонного фильтра от
                    нашего сервиса - это подлинная возможность ощущать качественный воздух в салоне Вашего автомобиля.
                </p>
                <p className="service__card__p">
                    Тенденция оснащения автомобилей салонными фильтрами превращается в твердое правило - так, в Германии
                    в рамках серийного производства ежедневно оснащают фильтрами воздуха салона до 10 000 автомобилей.
                    Причинами этого явления служат неоспоримые достоинства салонных фильтров, среди которых:
                </p>
                <ul className="service__ul">
                    <li className="service__li">коренное улучшение состава воздуха в салоне Вашего автомобиля</li>
                    <li className="service__li">почти 100% очистка воздуха от воздушного сора (пыльца растений,
                        другие нежелательные частицы, сажа, вредные газы);
                    </li>
                    <li className="service__li">систематическая замена салонного фильтра обязательна для аллергиков,
                        астматиков, а также при нахождении детей в салоне автомобиля
                    </li>
                    <li className="service__li">для воздушного салонного фильтра используются только современные
                        фильтрующие материалы
                    </li>
                    <li className="service__li">все виды нетканого материала для салонного фильтра отличаются
                        надежностью, не имеют химической пропитки и запаха.
                    </li>
                </ul>
                <p className="service__card__p">
                    Замена данного фильтра необходима (раз в 2 года (каждые 40 тыс. км) (при каждой замене масла (каждые
                    8000 - 16000 км))). Когда Вы чувствуете, что подача воздуха в салон автомобиля уменьшилась или
                    ухудшилась в качестве, салонный фильтр стоит заменить раньше планируемого срока.
                </p>
                <OnlineOrder></OnlineOrder>
            </div>
        </div>

        <h2 className="service__h2">
            МЫ ОБСЛУЖИВАЕМ ВСЕ ВИДЫ АВТО МАРОК
        </h2>
        <p className="service__p">
            Вследствие большой популяризации личного транспортного средства в современном мире, автомобилей и
            автовладельцев становится все больше. Но не все способны качественно обслуживать свои машины, поэтому в
            интернете появляется все больше вопросов про техническое обслуживание автомобилей.
            <br/> <br/>
            На сегодняшний день автомасло можно приобрести даже в продуктовых магазинах. Но лучше приобретать и выбирать
            технические жидкости в специализированных магазинах, где предоставлен широкий выбор автомасел и их
            производителей. В специализированных магазинах шансы купить некачественную подделку многократно снижаются.
            Для того, чтобы не нарваться на подделку.
            <br/> <br/>
            Наши специалисты смогут подсказать или подобрать для Вас лучший вариант. Так как автомасло отличается не
            только качеством, но и различными присадками и основой.
        </p>
        
        <h2 className="service__h2">
            Разновидности автомобильного масла
        </h2>
        <p className="service__p">
            Всего, три основных разновидности основы — это минеральное, полусинтетическое и синтетическое масло.
            Необходимо точно знать, на какой основе используется масло в двигателе.
        </p>
        <p className="service__p">
            На основе этих трех разновидностей, производится вся масса продуктов для автомобиля, которые представлены в
            нашем сервисе «QUALITY АВТОСЕРВИС». Минеральное масло уже практически не используется, поэтому придется
            выбирать между синтетическим и полусинтетическим.
        </p>
        <p className="service__p">
            Выбор будет между синтетикой и полусинтетикой, как уже говорилось, все эти масла изготовлены на основе
            искусственных соединений. Естественно синтетическая жидкость дороже, но значительно превосходит по
            техническим показателям полусинтетику. Но стоит отметить, что для большинства автомобилей подходит и второй
            вариант.
        </p>
        
        <h2 className="service__h2">
            Различные нюансы
        </h2>
        <p className="service__p">
            В первую очередь, на частоту замены масло влияет рекомендация автомобильного производителя и рекомендация
            производителя автомобильной жидкости. Вследствие чего, необходимо выбирать наименьший промежуток, для
            уверенности сохранности мотора. Также, на срок службы влияют и внешние факторы, зависящие от условий
            эксплуатации автомобиля.
        </p>
        <p className="service__p">
            Исходя из этого, срок замены может уменьшиться еще, если автомобиль используется в сложных экстремальных
            условиях. Основным параметром для замены, является пробег автомобиля — это самый простой способ
            контролировать периодичность обслуживания, определять необходимость по другим факторам крайне
            затруднительно.
        </p>
        <p className="service__p">
            Выбор будет между синтетикой и полусинтетикой, как уже говорилось, все эти масла изготовлены на основе
            искусственных соединений. Естественно синтетическая жидкость дороже, но значительно превосходит по
            техническим показателям полусинтетику. Но стоит отметить, что для большинства автомобилей подходит и второй
            вариант.
        </p>
        
        <h2 className="service__h2">
            Наши рекомендации от производителя
        </h2>
        <p className="service__p">
            У каждого автомобиля свои требования к частоте технического обслуживания, и узнать этот интервал просто.
            Необходимо найти графу «Сервисный интервал» в документации к приобретенному автомобилю. Но стоит учитывать,
            что это только рекомендации производителя, которые приведены для автомобилей, использующиеся в обычном
            городском режиме.
        </p>
        <p className="service__p">
            Каждое нестандартное использование автомобиля снижает показатель, и решение о замене моторного масла
            ложиться на Вас. Ведь никто лучше не знает, об условиях эксплуатации машины.
        </p>
        
        <h2 className="service__h2">
            Когда менять моторное масло
        </h2>
        <p className="service__p">
            И так, мы подошли к главному вопросу — Когда же менять масло в двигателе? Но мы до сих пор не можем дать
            точного ответа. Большинство автовладельцев не задумываются над этим, есть всем известный технический
            регламент, масло необходимо менять каждые 7 – 10 тысяч километров. Но, как мы уже выяснили, много факторов
            влияет на деградацию качества используемой жидкости в моторе. И кому интересно, ниже мы подробно разберем
            некоторые факторы.
        </p>
        
        <h2 className="service__h2">
            Когда менять моторное масло
        </h2>
        <p className="service__p">
            И так, мы подошли к главному вопросу — Когда же менять масло в двигателе? Но мы до сих пор не можем дать
            точного ответа. Большинство автовладельцев не задумываются над этим, есть всем известный технический
            регламент, масло необходимо менять каждые 7 – 10 тысяч километров. Но, как мы уже выяснили, много факторов
            влияет на деградацию качества используемой жидкости в моторе. И кому интересно, ниже мы подробно разберем
            некоторые факторы.
        </p>
        
        <h2 className="service__h2">Городской и загородный режим</h2>
        <p className="service__p">
            Стоит отметить, выше уже говорили о том, что замена масла ориентируясь исключительно на пробег не совсем
            правильный, но очень удобный способ. Но, пробег в разных режимах — отличается по нагрузке на двигатель и,
            следовательно, на моторное масло. Разница между городским пробегом и пробегом по загородным трассам может
            иметь разницу в четыре раза. Более верным способом будет ориентирование на моточасы, ведь обычный интервал в
            15 000 км по городу — это практически 700 часов работы двигателя, в то же время, при пробеге по трассе — это
            не более 200 моточасов.
        </p>
        <p className="service__p">
            Для эксплуатационных характеристик технической жидкости такая разница очень велика. Даже при работе
            двигателя на холостом ходу в пробках, двигатель испытывает достаточные нагрузки, чем усугубляется плохое
            вентилирование охлаждающей жидкости и моторного масла, что приводит к еще большей деградации смазочного
            материала, и уменьшает период замены.
        </p>
        <p className="service__p">
            Отметим, что на трассе, автомобилисты ведут себя по-разному, некоторые «выжимают» из автомобиля все, а
            некоторые едут в спокойном режиме на скорости до 130 км/ч для большей экономии топлива и меньшей нагрузке на
            двигатель. При средней скорости на трассе в интервале 100-130 км/ч, двигатель нагружен ниже среднего
            городского режима, а охлаждение и вентиляция достигают максимальных показателей. В случае мощных моторов,
            такая скорость практически не нагружает их, следовательно, и ресурс автомобильного масла практически не
            теряется.
        </p>
        <p className="service__p">
            Естественно, что при увеличении скорости при движении на трассе, увеличится и нагрузка на мотор с маслом. На
            маломощных двигателях нагрузка увеличивается большими скачками, и при достижении максимальных параметров,
            ресурс мотора и жидкости в нем вырабатывается достаточно быстро. Более мощные двигатели справляются с этим
            проще, и нагрузка для них растет плавным графиком.
        </p>
        <p className="service__p">
            Стоит отметить, что при увеличении нагрузки на мотор, нагрузка на техническую жидкость растет не линейно.
            При этом, значительно ухудшаются условия работы масла: увеличивается температура рабочей среды,
            увеличивается давление и т.д. Из чего можно сделать вывод, что идеальными условиями является езда по трассе
            на средних скоростях, при этом не допускать долгой работы мотора на холостом ходу после прогрева.
        </p>
        <p className="service__p">
            И так, мы выяснили, что ориентирование на пробег, во многих случаях очень неправильно, и разница в наработке
            моточасов может составить до четырехкратной. По известному техническому регламенту от компании BMW, которая
            в некоторых случаях указывает интервал замены именно в моточасах, мы знаем, что замену масла необходимо
            проводить в пределах 200-400 наработанных часов в зависимости от условий эксплуатации. За исключением особых
            случаев, когда двигатель автомобиля постоянно работает на максимуме своих возможностей.
        </p>
        <p className="service__p">
            Важно помнить, что превышение рекомендованных сроков эксплуатации смазочной жидкости для двигателя может
            привести к серьезным проблемам и поломки силового агрегата.
        </p>
        <p className="service__p">
            При всех наших теоретических выкладках, можно легко подсчитать, что максимальный срок замены масла в 400
            моточасов. При пересчете в средний городской режим на скоростях 20-25 км/ч составят всем известный интервал
            в 8-10 тысяч километров. А при загородном режиме, мы получаем безумную цифру в 32 000 километров при средней
            скорости движения 80 км/ч.
        </p>
        <p className="service__p">
            Естественно, соблюдать исключительно загородный режим вождения и постоянную скорость никто не сможет,
            поэтому категорически не рекомендуем дотягивать до таких показателей, но можно учитывать этот момент при
            следующей замене автомасла. Также, стоит учитывать объем и мощность мотора, так как на малолитражных и
            высокооборотистых моторах нагрузка на техническую смазочную жидкость значительно повышается.
        </p>
        <p className="service__p">
            Также, очень важным параметром является и качество автомасла, а также его основа. Синтетическое
            автомобильное масло может прослужить дольше своего аналога в полусинтетическом сегменте.
        </p>

        
        <h2 className="service__h2">Разберемся в типах автомобильных масел</h2>
        <p className="service__p">
            Как уже говорилось выше, на сегодняшний день выбор представлен в широком ассортименте. По качеству и
            технологии производства, также есть огромная разница. Некоторые выпускаются до сих пор по советским
            методикам, а некоторые достигли такого прогресса, что сравнимы со сложностью современной электроники.
        </p>
        <p className="service__p">
            Но главным отличием является основа — минеральная, полусинтетическая или полностью синтетическая (которые
            также отличаются по принципу производства и составу). Также, отличаются количеством и разнообразием
            различных присадок для улучшения технических характеристик.
        </p>

        
        <h2 className="service__h2">Полусинтетика</h2>
        <p className="service__p">
            Начинаем обзор типов масел с полусинтетики, так как, минеральное автомобильное масло уже практически не
            встречается и не используется. Данный вид полностью заменен полусинтетическими техническими жидкостями, в
            которых используется повышенное количество полезных присадок. По цене, такие масла обходятся немного дороже
            минеральных, но по техническим характеристикам значительно превосходят минеральные, которые быстро теряют
            свои свойства, а присадки в них держатся еще меньше. При правильном подходе, для них вполне реален срок
            службы в интервале 7 – 10 тысяч километров. Но сложные условия эксплуатации значительно снижают данный
            показатель.
        </p>

        
        <h2 className="service__h2">Синтетические гидрокрекинговые автомасла</h2>
        <p className="service__p">
            Это очередная ступень в развитии автомобильных масел, и считаются лучше полусинтетических масел, но новый
            техпроцесс производства позволил добиться повышенной стабильности вязкости, а присадки удерживаются в
            составе значительно дольше. Такие основы часто советуют автопроизводители как оригинальные. В идеальных
            условиях эксплуатации автомобиля, можно добиться до 30 000 км без замены. В реальных условиях, это
            недостижимая цифра, так как эта серия относится к малозольным и значительно зависит от мотора и качества
            топлива.
        </p>
        <p className="service__p">
            Но в сравнении с полусинтетикой, масла данной категории значительно превосходят в качестве на пробеге в 15
            000 километров. При эксплуатации выделяется меньше вредных продуктов, а способности к очистке двигателя
            выше.
        </p>
        <p className="service__p">
            Но есть особенность современных масел этой серии, зачастую в составе присутствует ПАО и эстеры. Главной
            положительной чертой «малозольных» серий является малое количество присадок, для уменьшения вредных
            продуктов распада. Что значительно продлевает срок жизни каталитического нейтрализатора, но может повлиять
            на срок службы самого двигателя.
        </p>

        
        <h2 className="service__h2">Синтетика на основе полиальфаолефинов</h2>
        <p className="service__p">
            Это самые популярные масла прошлых лет, в основном использовались для профессиональных гоночных автомобилей.
            Такие масла обходятся намного дороже, но это того стоит, производители добились феноменальной стойкости
            вязкости в самых экстремальных условиях. Такое масло способно сохранять свою вязкость до - 60 градусов по
            Цельсию без специальных присадок. А уровень загрязнения мотора при распаде - практически минимален.
        </p>
        <p className="service__p">
            Но не обошлось без ложки дегтя в бочке меда, это специализированный продукт, который не получил
            распространения, а также имеет свои минусы.
        </p>
        <p className="service__p">
            В этом случае сложно прогнозировать время использования масла, так как оно создавалось для использования в
            экстремальных условиях. Но само масло очень стойко к деградации и может прослужить очень долгое время. В
            отличие от его специализированных присадок и влияния некачественного топлива. Использовать этот вариант или
            нет — решение только Ваше.
        </p>

        
        <h2 className="service__h2">Эстеровые масла</h2>
        <p className="service__p">
            Данный вид продукта имеет основу на базе диэфиров и полиэфиров. Это признанный этап развития в производстве
            автомобильных масел, которые показали себя на высоком уровне при тестах. Эстеровые основы имеют высокий
            показатель очистки двигателя. Стоит отметить, что большинство продуктов с надписью на коробке гласящей, что
            перед вами эстеровое масло — таковыми не являются, на самом деле это масло на основе гидрокрекинга с
            примесью других масел.
        </p>
        <p className="service__p">
            Есть мнение, что данный вид масел чисто спортивный, и срок службы у него значительно ниже чем у других - это
            заблуждение. Это связано с тем, что много видов масел продается со сниженным количеством присадок, а само
            масло, из-за высоких технических характеристик, приняло распространение в гоночной сфере (в которой
            естественно ресурс жидкости вырабатывается значительно быстрее).
        </p>
        <p className="service__p">
            Эстеровые масла обладают отличным свойством — они замечательно промывают двигатель от загрязнений после
            длительного использования более дешевых вариантов, а качественная основа требует намного меньше присадок для
            качественной работы. Так что. Не стоит его сбрасывать со счетов или тратить лишние деньги каждые 5 тысяч
            километров.
        </p>

        
        <h2 className="service__h2">Полигликовые автомасла</h2>
        <p className="service__p">
            Одна из последних разработок в данном сегменте, еще не получила широкого распространения, но по своим
            техническим характеристикам подходит на роль долгожителя в силовых агрегатах. Основа автомасла изготовлена
            на базе полигликоля, что позволило добиться самых высоких показателей коэффициента трения и стойкости к
            деградации при экстремальных нагрузках. Данное масло растворяет в себе практически все виды загрязнения, что
            сохранит Ваш двигатель в чистоте. А также, абсолютно не агрессивен для деталей из резины.
        </p>

        
        <h2 className="service__h2">Вывод</h2>
        <p className="service__p">
            Из выше описанного стало видно, что разные типы масел от разных производителей отличаются очень сильно, и
            при расчете интервала замены технической жидкости, нужно учитывать, что приведенные таблицы интервалов от
            производителя рассчитаны на применение самых стандартных видов автомасел. При использовании других составов,
            нужно ориентироваться на тестовые замеры сторонних профессионалов и личный опыт других потребителей.
        </p>

        <OnlineOrder></OnlineOrder>
    </div>
}