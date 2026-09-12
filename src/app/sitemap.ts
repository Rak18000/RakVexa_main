import {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{const base='https://rakvexa.com';return ['','/services','/industries','/portfolio','/pricing','/process','/about','/contact'].map(path=>({url:base+path,lastModified:new Date()}));}
