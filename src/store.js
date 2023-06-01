import Vuex from "vuex";
import pathify, { make } from "vuex-pathify";
import roles from "./roles.json";
import products from "./products.json";
import D27QO from "./data/D27QO.json";
import CO443726 from "./data/CO443726.json";
import X1YOGA from "./data/X1YOGA.json";
import LightSpeaker from "./data/LightSpeaker.json";
import axios from "axios";

const parseImgPath = (image) => require(`@/assets/${image}`);
const productData = {
  ...products,
  // D27QO,
  // CO443726,
  // X1YOGA,
  // LightSpeaker,
};

Object.values(productData).map((product) => {
  product.data.d0_product_image = parseImgPath(product.data.d0_product_image);
  product.data.d0_brand_image = parseImgPath(product.data.d0_brand_image);
  product.data.d2 &&
    product.data.d2.map(
      (cert) => (cert.d2_image = parseImgPath(cert.d2_image))
    );
  product.data.d1 &&
    product.data.d1.map(
      (reseller) =>
        (reseller.d1_resellerImage = parseImgPath(reseller.d1_resellerImage))
    );
  product.data.d11 &&
    product.data.d11.map(
      (part) => (part.d11_icon = parseImgPath(part.d11_icon))
    );
  product.data.d14 &&
    product.data.d14.map(
      (guide) => (guide.d14_image = parseImgPath(guide.d14_image))
    );
  product.data.d20 &&
    product.data.d20.map(
      (item) => (item.d20_eventImage = parseImgPath(item.d20_eventImage))
    );
  product.data.d23 &&
    product.data.d23.map(
      (item) => (item.d23_image = parseImgPath(item.d23_image))
    );
  product.data.d25 &&
    product.data.d25.map(
      (item) =>
        (item.d25_image = item.d25_image && parseImgPath(item.d25_image))
    );
  product.data.d26 &&
    product.data.d26.map(
      (item) =>
        (item.d26_image = item.d26_image && parseImgPath(item.d26_image))
    );
  if (product.data.d7)
    product.data.d7.d7_sellerImage = parseImgPath(
      product.data.d7.d7_sellerImage
    );
});

const state = {
  currentRole: "consumer",
  currentCategory: 0,
  currentProduct: "PF0H268N",
  gUIdeElements: [],
  gUIdeActive: false,
  gUIdeStep: 1,
  isOnboardingModalActive: false,
  mobileSidebarActive: false,
  roles,
  //products: productData,
  products: [],
};

const mutations = make.mutations(state);

const store = new Vuex.Store({
  state,
  mutations: {
    ...mutations,
    SET_ROLE(state, newRole) {
      state.currentRole = newRole;
    },
    SET_CATEGORY(state, newCategory) {
      state.currentCategory = newCategory;
    },
    ADD_GUIDE_ELEMENT(state, element) {
      const index = state.gUIdeElements.findIndex(
        (e) => e.element === element.element
      );
      if (index === -1) {
        state.gUIdeElements.push(element);
      } else {
        state.gUIdeElements[index] = element;
      }
      state.gUIdeElements = [...state.gUIdeElements];
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    addGUIdeElement({ commit, state }, elementData) {
      commit("ADD_GUIDE_ELEMENT", elementData);
    },
    async fetchProducts({ commit }, address) {
      try {
        const data = await axios.get(
          "http://node.alpha.obada.io:1317/obada-foundation/fullcore/nft/" + address + "/all"
        );

        const products = []

        for (const asset of data.data.NFT){
          let product = productData[""]

          const data = await axios.get(
            "https://registry.beta.obada.io/api/v1.0/diddoc/" + asset.id
          );

          let didDoc = data.data.document
          product.data.did = didDoc.id
          product.data.usn = asset.data.usn
          product.data.checksum = asset.uri_hash

          for (const obj in didDoc.metadata.objects) {
            switch (didDoc.metadata.objects[obj].metadata.type) {
              case "physicalAssetIdentifiers": {
                  const ipfsHash = didDoc.metadata.objects[obj].url.split("://")[1]
                  const physicalAssetIdentifiers = await axios.get(
                    "https://ipfs.alpha.obada.io:8080/ipfs/" + ipfsHash
                  );

                  console.log(physicalAssetIdentifiers)

                  break;
                }

                case "physicalAssetIdentifiers1": {  
                   const physicalAssetIdentifiers1 = await axios.get(
                     "https://registry.beta.obada.io/api/v1.0/diddoc/" + asset.id
                   );
   
                   break;
                }

                case "physicalAssetIdentifiers2": {
                    const physicalAssetIdentifiers2 = await axios.get(
                      "https://registry.beta.obada.io/api/v1.0/diddoc/" + asset.id
                    );
    
                    break;
                }
            }
          }

          products.push(product)
        }

        commit("SET_PRODUCTS", products);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

  },
  getters: {
    getProducts: (state) => state.products,
  },
  plugins: [pathify.plugin],
});

export default store;
