/** Mapped types **/

type PcBrand = {
    name: string,
    country: string,
    createdAt: Date
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';
type MyPcRecord = {
    [BrandKey in WellKnownBrands]?: PcBrand;
}

const brandRecord: MyPcRecord = {
    apple: {
        name: 'Mac',
        country: 'USA',
        createdAt: new Date(),
    }
}

function pcCatalog(pcCatalog: MyPcRecord) {
    console.log(pcCatalog.apple?.country)
}

type PartOfWindow = {
    [Key in 'document' | 'screen' | 'navigator']?: Window[Key];
}

const p: PartOfWindow = {
    screen: window.screen
}

export {}