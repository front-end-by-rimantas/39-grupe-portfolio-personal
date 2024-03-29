import { Blogs } from "../components/Blogs.js";
import { Navigation } from "../components/Header.js";
import { blogsData } from "../data/blogsData.js";
import { headerData } from "../data/headerData.js";
import { headerDataMob } from "../data/headerData.js";
import { Stats } from "../components/Stats.js";
import { statsData } from "../data/statsData.js";
import { Services } from "../components/Services.js";
import { servicesData } from "../data/servicesData.js";
import { Plans } from "../components/Plans.js";
import { plansData } from "../data/plansData.js";

/* header start */
new Navigation(".header-navigation", headerData);

new Navigation(".mobile-nav", headerDataMob);
/* header end */

/* hero start */

/* hero end */

/* about start */

/* about end */

/* services start */

new Services("#services_block", servicesData);

/* services end */

/* stats start */
new Stats("#stats_block", statsData);

/*Galima naudoti vietoje init Stats.js faile
const stats = new Stats('#stats_block');
if (stats.isValidSelector()
    && stats.findTargetElement()) {
    stats.render();
    }*/

/* stats end */

/* projects start */

/* projects end */

/* feedback start */

/* feedback end */

/* plan start */

new Plans("#plans-row", plansData);

/* plan end */

/* blog start */

new Blogs('#blogs_block', blogsData) ; 

/* blog end */

/* blog start */

/* brands start */

/* brands end */

/* footer start */

/* footer end */
