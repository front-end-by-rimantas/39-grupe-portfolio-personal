import { Navigation } from "../components/Header.js";
import { Gallery } from "../components/projects.js";
import { Services } from "../components/services.js";
import { headerData } from "../data/headerData.js";
import { projectsData } from "../data/projectsData.js";

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

new Services ()


/* services end */

/* stats start */

/* stats end */

/* projects start */


new Gallery('#projects_block', projectsData);


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
