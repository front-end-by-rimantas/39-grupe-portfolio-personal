import { Navigation } from "../components/Header.js";
import { headerData } from "../data/headerData.js";
import { Stats } from "../components/Stats.js";
import { statsData } from "../data/statsData.js";

/* header start */
const navigation = new Navigation(".header-list", headerData);
navigation.renderDesktop();
navigation.enableMobileNav();
navigation.navigationShadow();

const mobileNavigation = new Navigation(".mobile-nav-list", headerData);
mobileNavigation.renderMobile();
/* header end */

/* hero start */

/* hero end */

/* about start */

/* about end */

/* services start */

/* services end */

/* stats start */
new Stats('#stats_block', statsData);

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

/* plan end */

/* blog start */

/* blog end */

/* blog start */

/* brands start */

/* brands end */

/* footer start */

/* footer end */
