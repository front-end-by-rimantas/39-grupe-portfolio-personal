import { Navigation } from "../components/Header.js";
import { headerData } from "../data/headerData.js";
import { Services } from "../components/Services.js";
import { servicesData } from "../data/servicesData.js";

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

new Services('#services_block', servicesData);

/* services end */

/* stats start */

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
