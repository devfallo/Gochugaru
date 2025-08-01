'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA --- //
const content = {
  ko: {
    title: "고추가루",
    nav: { product: "제품 소개", recipe: "레시피", contact: "구매하기" },
    hero: { title: "맛의 정점, 고추가루가 열어갑니다.", subtitle: "최고의 맛을 위한 단 하나의 선택" },
    product: {
      title: "차원이 다른 풍미",
      description: "저희 고추가루는 100% 국내산 태양초 고추만을 엄선하여 전통 방식 그대로 만들었습니다. 캡사이신 함량이 풍부하여 인위적이지 않은 깊고 깔끔한 매운맛을 자랑하며, 어떤 요리에 넣어도 음식 본연의 맛을 해치지 않고 풍미를 한층 더 끌어올립니다. 단순한 매운맛을 넘어, 요리의 격을 높이는 저희 고추가루와 함께 특별한 미식 경험을 완성해 보세요."
    },
    recipe: {
      title: "고추가루 활용 레시피",
      ingredients: "재료",
      instructions: "만드는 순서",
      tips: "맛있게 먹는 팁"
    },
    contact: { title: "구매하기", message: "준비중입니다." },
    footer: "© 2025 고추가루. All rights reserved.",
    recipes: [
      { name: '김치찌개', imageUrl: 'https://images.unsplash.com/photo-1586952518485-fd9b94225b3e?q=80&w=2070&auto=format&fit=crop', ingredients: ['잘 익은 김치 300g', '돼지고기 150g', '두부 1/2모', '대파 1/2대', '양파 1/4개', '고추가루 2큰술', '다진 마늘 1큰술', '국간장 1큰술', '멸치육수 500ml'], instructions: ['돼지고기와 김치를 볶다가 고추가루를 넣고 고추기름을 내줍니다.', '멸치육수를 붓고 끓으면 중불로 15분간 끓입니다.', '두부, 양파, 마늘, 국간장을 넣고 5분 더 끓인 후 대파를 넣고 마무리합니다.'], tips: '참치나 꽁치를 넣어도 맛있어요. 마지막에 청양고추를 더하면 더욱 칼칼한 맛을 즐길 수 있습니다.' },
      { name: '떡볶이', imageUrl: 'https://images.unsplash.com/photo-1622922599383-382416c34164?q=80&w=2070&auto=format&fit=crop', ingredients: ['떡볶이 떡 400g', '어묵 200g', '양파 1/2개', '대파 1/2대', '고추장 3큰술', '고추가루 2큰술', '설탕 2큰술', '다진 마늘 1큰술', '멸치육수 600ml'], instructions: ['멸치육수에 고추장, 고추가루, 설탕, 다진 마늘을 풀어 양념장을 만듭니다.', '양념장이 끓으면 떡을 넣고 끓입니다.', '떡이 말랑해지면 어묵, 양파, 대파를 넣고 5분 더 끓여 완성합니다.'], tips: '삶은 계란이나 라면 사리를 추가하면 더욱 푸짐하게 즐길 수 있습니다. 치즈를 올리면 매운맛이 중화되어 아이들도 좋아해요.' },
      { name: '닭볶음탕', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop', ingredients: ['닭 1마리 (1kg)', '감자 2개', '당근 1/2개', '양파 1개', '대파 1대', '고추장 3큰술', '고추가루 3큰술', '간장 3큰술', '설탕 2큰술', '다진 마늘 2큰술', '생강가루 1작은술'], instructions: ['닭은 깨끗이 씻어 끓는 물에 살짝 데쳐 불순물을 제거합니다.', '감자와 당근은 큼직하게 썰어 준비합니다.', '모든 양념 재료를 섞어 닭과 버무린 후 30분간 재워둡니다.', '냄비에 양념한 닭과 감자, 당근, 물 500ml를 넣고 센 불에서 끓이다가 중불로 줄여 30분간 익힙니다.', '마지막에 양파와 대파를 넣고 5분 더 끓여 완성합니다.'], tips: '당면을 추가하면 더욱 맛있습니다. 압력솥을 사용하면 조리 시간을 단축하고 육질을 더 부드럽게 만들 수 있습니다.' },
      { name: '제육볶음', imageUrl: 'https://images.unsplash.com/photo-1598616492258-f535803c160a?q=80&w=2070&auto=format&fit=crop', ingredients: ['돼지고기 앞다리살 600g', '양파 1/2개', '대파 1대', '청양고추 2개', '고추장 3큰술', '고추가루 2큰술', '간장 2큰술', '설탕 1큰술', '다진 마늘 1큰술', '참기름 1큰술'], instructions: ['돼지고기는 먹기 좋은 크기로 썰어 양념 재료에 버무려 20분간 재워둡니다.', '양파, 대파, 고추는 어슷하게 썰어줍니다.', '달군 팬에 양념한 고기를 넣고 센 불에서 볶다가 고기가 익으면 채소를 넣고 함께 볶아줍니다.'], tips: '쌈채소와 함께 쌈밥으로 즐기거나, 남은 양념에 밥을 볶아 먹으면 별미입니다. 불맛을 더하고 싶다면 마지막에 토치로 살짝 그을려주세요.' },
      { name: '순두부찌개', imageUrl: 'https://images.unsplash.com/photo-1626082382339-b552a_849a15f?q=80&w=2070&auto=format&fit=crop', ingredients: ['순두부 1봉', '다진 돼지고기 50g', '김치 50g', '양파 1/4개', '계란 1개', '고추가루 2큰술', '다진 마늘 1큰술', '국간장 1큰술', '참기름 1큰술', '멸치육수 200ml'], instructions: ['뚝배기에 참기름을 두르고 다진 돼지고기, 김치, 양파를 볶습니다.', '고추가루를 넣고 볶아 고추기름을 낸 후 멸치육수를 붓고 끓입니다.', '국물이 끓으면 순두부를 넣고 숟가락으로 큼직하게 나눕니다.', '국간장과 다진 마늘로 간을 맞춘 후 계란을 깨뜨려 넣고 대파를 뿌려 완성합니다.'], tips: '바지락이나 새우를 추가하면 해물 순두부찌개로 즐길 수 있습니다. 밥에 비벼 먹을 때 김가루를 뿌리면 더욱 맛있습니다.' },
      { name: '비빔밥', imageUrl: 'https://images.unsplash.com/photo-1596239950386-a5a55f034054?q=80&w=1974&auto=format&fit=crop', ingredients: ['밥 1공기', '소고기 100g', '시금치 50g', '도라지 50g', '콩나물 50g', '계란 1개', '고추장 2큰술', '참기름 1큰술', '고추가루 1큰술'], instructions: ['소고기는 간장 양념에 볶고, 각 나물은 소금과 참기름으로 무쳐 준비합니다.', '계란은 프라이로 부쳐줍니다.', '그릇에 밥을 담고 준비한 재료들을 보기 좋게 올립니다.', '고추장, 참기름, 고추가루를 취향에 맞게 넣어 비벼 먹습니다.'], tips: '돌솥에 밥을 담고 재료를 올려 약한 불에서 데우면 따뜻한 돌솥비빔밥으로 즐길 수 있습니다. 다양한 계절 나물을 활용해 보세요.' },
      { name: '오징어볶음', imageUrl: 'https://images.unsplash.com/photo-1604560925338-67b459759198?q=80&w=2070&auto=format&fit=crop', ingredients: ['오징어 2마리', '양파 1/2개', '당근 1/4개', '양배추 100g', '대파 1/2대', '고추장 2큰술', '고추가루 2큰술', '간장 1큰술', '설탕 1큰술', '다진 마늘 1큰술'], instructions: ['오징어는 손질하여 칼집을 내고 먹기 좋게 썹니다.', '채소는 비슷한 크기로 썰어 준비합니다.', '양념 재료를 모두 섞어 오징어와 채소를 버무려 10분간 재워둡니다.', '달군 팬에 재워둔 재료를 넣고 센 불에서 빠르게 볶아냅니다.'], tips: '소면을 삶아 곁들이면 푸짐한 일품요리가 됩니다. 남은 양념에 밥을 볶아 마무리하는 것도 좋은 방법입니다.' },
      { name: '부대찌개', imageUrl: 'https://images.unsplash.com/photo-1626202157240-5434b0357233?q=80&w=2070&auto=format&fit=crop', ingredients: ['소시지 100g', '햄 100g', '다진 돼지고기 100g', '김치 150g', '두부 1/2모', '라면사리 1개', '체다치즈 1장', '고추가루 2큰술', '사골육수 800ml'], instructions: ['전골냄비에 김치와 햄, 소시지, 다진 돼지고기, 두부를 보기 좋게 담습니다.', '사골육수를 붓고 고추가루와 다진 마늘을 넣어 끓입니다.', '국물이 끓으면 라면사리를 넣고 익힙니다.', '마지막에 체다치즈와 대파를 올려 완성합니다.'], tips: '베이크드 빈스를 추가하면 오리지널 부대찌개의 맛을 더할 수 있습니다. 떡이나 만두 사리를 추가해도 잘 어울립니다.' },
      { name: '짬뽕', imageUrl: 'https://images.unsplash.com/photo-1558819335-56936a42a4a9?q=80&w=2070&auto=format&fit=crop', ingredients: ['중화면 1인분', '오징어 1/2마리', '새우 5마리', '홍합 5개', '양파 1/2개', '배추 50g', '돼지고기 50g', '3 tbsp gochugaru', '500ml chicken stock', '1 tbsp oyster sauce'], instructions: ['팬에 기름을 두르고 돼지고기와 채소를 볶다가 고추가루를 넣고 볶아 고추기름을 냅니다.', '해산물을 넣고 살짝 더 볶은 후 치킨스톡과 굴소스를 넣고 끓입니다.', '별도로 삶아둔 중화면을 그릇에 담고 완성된 짬뽕 국물을 부어줍니다.'], tips: '고추기름을 따로 내어 마지막에 둘러주면 불맛을 더할 수 있습니다. 숙주를 듬뿍 올려 아삭한 식감을 더해보세요.' },
      { name: '마파두부', imageUrl: 'https://images.unsplash.com/photo-1599360889421-83b69a0b902b?q=80&w=1974&auto=format&fit=crop', ingredients: ['두부 1모', '다진 돼지고기 100g', '대파 1/2대', '두반장 2큰술', '고추가루 1큰술', '된장 1작은술', '설탕 1작은술', '전분물 2큰술', '치킨스톡 150ml'], instructions: ['두부는 깍둑썰기하여 끓는 소금물에 살짝 데쳐 준비합니다.', '팬에 기름을 두르고 다진 돼지고기를 볶다가 두반장, 된장, 고추가루를 넣고 볶습니다.', '치킨스톡을 붓고 끓으면 두부를 넣고 조립니다.', '전분물을 풀어 농도를 맞추고 대파와 참기름을 넣어 마무리합니다.'], tips: '산초가루를 살짝 뿌리면 현지의 맛을 더욱 잘 느낄 수 있습니다. 밥 위에 얹어 마파두부 덮밥으로 즐겨보세요.' }
    ]
  },
  en: {
    title: "Gochugaru",
    nav: { product: "Product", recipe: "Recipes", contact: "Contact" },
    hero: { title: "The Pinnacle of Flavor, Opened by Gochugaru.", subtitle: "The one and only choice for the best taste" },
    product: {
      title: "A Different Level of Flavor",
      description: "Our Gochugaru is made in the traditional way, using only 100% domestically grown sun-dried peppers. Rich in capsaicin, it boasts a deep, clean spiciness that is not artificial, and enhances the flavor of any dish without overpowering it. Go beyond simple spiciness and complete a special gourmet experience with our Gochugaru that elevates the quality of your cooking."
    },
    recipe: {
      title: "Gochugaru Recipes",
      ingredients: "Ingredients",
      instructions: "Instructions",
      tips: "Tips for delicious eating"
    },
    contact: { title: "Contact", message: "Coming Soon." },
    footer: "© 2025 Gochugaru. All rights reserved.",
    recipes: [
      { name: 'Kimchi Jjigae', imageUrl: 'https://images.unsplash.com/photo-1586952518485-fd9b94225b3e?q=80&w=2070&auto=format&fit=crop', ingredients: ['300g ripe kimchi', '150g pork', '1/2 block of tofu', '1/2 green onion', '1/4 onion', '2 tbsp gochugaru', '1 tbsp minced garlic', '1 tbsp soy sauce', '500ml anchovy broth'], instructions: ['Stir-fry pork and kimchi, then add gochugaru to make chili oil.', 'Pour in anchovy broth and boil for 15 minutes over medium heat.', 'Add tofu, onion, garlic, and soy sauce, boil for 5 more minutes, then add green onion to finish.'], tips: 'You can also use tuna or saury. Add some cheongyang chili peppers at the end for an extra kick.' },
      { name: 'Tteokbokki', imageUrl: 'https://images.unsplash.com/photo-1622922599383-382416c34164?q=80&w=2070&auto=format&fit=crop', ingredients: ['400g rice cakes', '200g fish cakes', '1/2 onion', '1/2 green onion', '3 tbsp gochujang', '2 tbsp gochugaru', '2 tbsp sugar', '1 tbsp minced garlic', '600ml anchovy broth'], instructions: ['Make the sauce by dissolving gochujang, gochugaru, sugar, and minced garlic in anchovy broth.', 'When the sauce boils, add the rice cakes and cook.', 'When the rice cakes are soft, add fish cakes, onion, and green onion and cook for 5 more minutes.'], tips: 'Add boiled eggs or ramyeon noodles for a more substantial meal. Topping with cheese will neutralize the spiciness, making it great for kids too.' },
      { name: 'Dakbokkeumtang', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop', ingredients: ['1 chicken (1kg)', '2 potatoes', '1/2 carrot', '1 onion', '1 green onion', '3 tbsp gochujang', '3 tbsp gochugaru', '3 tbsp soy sauce', '2 tbsp sugar', '2 tbsp minced garlic', '1 tsp ginger powder'], instructions: ['Clean the chicken and parboil it to remove impurities.', 'Cut potatoes and carrots into large pieces.', 'Mix all seasoning ingredients, marinate the chicken for 30 minutes.', 'In a pot, add the marinated chicken, potatoes, carrots, and 500ml of water. Bring to a boil, then reduce to medium heat and cook for 30 minutes.', 'Finally, add onion and green onion and cook for 5 more minutes.'], tips: 'Adding glass noodles makes it even more delicious. Using a pressure cooker can shorten the cooking time and make the meat more tender.' },
      { name: 'Jeyuk Bokkeum', imageUrl: 'https://images.unsplash.com/photo-1598616492258-f535803c160a?q=80&w=2070&auto=format&fit=crop', ingredients: ['600g pork shoulder', '1/2 onion', '1 green onion', '2 cheongyang chili peppers', '3 tbsp gochujang', '2 tbsp gochugaru', '2 tbsp soy sauce', '1 tbsp sugar', '1 tbsp minced garlic', '1 tbsp sesame oil'], instructions: ['Slice the pork and marinate it in the seasoning ingredients for 20 minutes.', 'Slice the onion, green onion, and chili peppers.', 'In a heated pan, stir-fry the marinated pork over high heat. When the pork is cooked, add the vegetables and stir-fry together.'], tips: 'Enjoy it as a ssam (wrap) with leafy vegetables, or stir-fry rice in the leftover sauce for another delicious meal. For a smoky flavor, you can lightly char it with a torch at the end.' },
      { name: 'Sundubu Jjigae', imageUrl: 'https://images.unsplash.com/photo-1626082382339-b552a_849a15f?q=80&w=2070&auto=format&fit=crop', ingredients: ['1 pack of soft tofu', '50g minced pork', '50g kimchi', '1/4 onion', '1 egg', '2 tbsp gochugaru', '1 tbsp minced garlic', '1 tbsp soy sauce', '1 tbsp sesame oil', '200ml anchovy broth'], instructions: ['In a ttukbaegi (earthenware pot), heat sesame oil and stir-fry minced pork, kimchi, and onion.', 'Add gochugaru and stir-fry to make chili oil, then pour in anchovy broth and bring to a boil.', 'When it boils, add the soft tofu and break it into large chunks with a spoon.', 'Season with soy sauce and minced garlic, then crack an egg on top and sprinkle with green onion to finish.'], tips: 'Add clams or shrimp to enjoy it as seafood sundubu-jjigae. It is even more delicious when mixed with rice and topped with seaweed flakes.' },
      { name: 'Bibimbap', imageUrl: 'https://images.unsplash.com/photo-1596239950386-a5a55f034054?q=80&w=1974&auto=format&fit=crop', ingredients: ['1 bowl of rice', '100g beef', '50g spinach', '50g bellflower root', '50g bean sprouts', '1 egg', '2 tbsp gochujang', '1 tbsp sesame oil', '1 tbsp gochugaru'], instructions: ['Stir-fry the beef with soy sauce seasoning, and season each vegetable with salt and sesame oil.', 'Fry an egg.', 'Place the rice in a bowl and arrange the prepared ingredients on top.', 'Mix with gochujang, sesame oil, and gochugaru to your liking.'], tips: 'You can enjoy it as a warm dolsot-bibimbap by heating the rice and ingredients in a stone pot over low heat. Try using various seasonal vegetables.' },
      { name: 'Ojingeo Bokkeum', imageUrl: 'https://images.unsplash.com/photo-1604560925338-67b459759198?q=80&w=2070&auto=format&fit=crop', ingredients: ['2 squids', '1/2 onion', '1/4 carrot', '100g cabbage', '1/2 green onion', '2 tbsp gochujang', '2 tbsp gochugaru', '1 tbsp soy sauce', '1 tbsp sugar', '1 tbsp minced garlic'], instructions: ['Clean the squids, score them, and cut them into bite-sized pieces.', 'Cut the vegetables into similar sizes.', 'Mix all the seasoning ingredients, marinate the squid and vegetables for 10 minutes.', 'In a heated pan, stir-fry the marinated ingredients over high heat quickly.'], tips: 'It becomes a great main dish when served with boiled somen noodles. Stir-frying rice in the leftover sauce is also a good way to finish the meal.' },
      { name: 'Budae Jjigae', imageUrl: 'https://images.unsplash.com/photo-1626202157240-5434b0357233?q=80&w=2070&auto=format&fit=crop', ingredients: ['100g sausage', '100g ham', '100g minced pork', '150g kimchi', '두부 1/2모', '라면사리 1개', '체다치즈 1장', '고추가루 2큰술', '사골육수 800ml'], instructions: ['전골냄비에 김치와 햄, 소시지, 다진 돼지고기, 두부를 보기 좋게 담습니다.', '사골육수를 붓고 고추가루와 다진 마늘을 넣어 끓입니다.', '국물이 끓으면 라면사리를 넣고 익힙니다.', '마지막에 체다치즈와 대파를 올려 완성합니다.'], tips: '베이크드 빈스를 추가하면 오리지널 부대찌개의 맛을 더할 수 있습니다. 떡이나 만두 사리를 추가해도 잘 어울립니다.' },
      { name: 'Jjamppong', imageUrl: 'https://images.unsplash.com/photo-1558819335-56936a42a4a9?q=80&w=2070&auto=format&fit=crop', ingredients: ['중화면 1인분', '오징어 1/2마리', '새우 5마리', '홍합 5개', '양파 1/2개', '배추 50g', '돼지고기 50g', '3 tbsp gochugaru', '500ml chicken stock', '1 tbsp oyster sauce'], instructions: ['팬에 기름을 두르고 돼지고기와 채소를 볶다가 고추가루를 넣고 볶아 고추기름을 냅니다.', '해산물을 넣고 살짝 더 볶은 후 치킨스톡과 굴소스를 넣고 끓입니다.', '별도로 삶아둔 중화면을 그릇에 담고 완성된 짬뽕 국물을 부어줍니다.'], tips: '고추기름을 따로 내어 마지막에 둘러주면 불맛을 더할 수 있습니다. 숙주를 듬뿍 올려 아삭한 식감을 더해보세요.' },
      { name: '마파두부', imageUrl: 'https://images.unsplash.com/photo-1599360889421-83b69a0b902b?q=80&w=1974&auto=format&fit=crop', ingredients: ['두부 1모', '다진 돼지고기 100g', '대파 1/2대', '두반장 2큰술', '고추가루 1큰술', '된장 1작은술', '설탕 1작은술', '전분물 2큰술', '치킨스톡 150ml'], instructions: ['두부는 깍둑썰기하여 끓는 소금물에 살짝 데쳐 준비합니다.', '팬에 기름을 두르고 다진 돼지고기를 볶다가 두반장, 된장, 고추가루를 넣고 볶습니다.', '치킨스톡을 붓고 끓으면 두부를 넣고 조립니다.', '전분물을 풀어 농도를 맞추고 대파와 참기름을 넣어 마무리합니다.'], tips: '산초가루를 살짝 뿌리면 현지의 맛을 더욱 잘 느낄 수 있습니다. 밥 위에 얹어 마파두부 덮밥으로 즐겨보세요.' }
    ]
  }
};

// --- COMPONENTS --- //
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[var(--button-primary)] text-[var(--text-primary)] p-4 rounded-full shadow-lg hover:bg-[var(--button-primary-hover)] transition-colors z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.75.75V0h-1.5v2h1.5V.75ZM3.26 4.32l-.53-.53-.354-.353-.53-.53 1.06-1.061.53.53.354.354.53.53-1.06 1.06Zm8.42-1.06.53-.53.353-.354.53-.53 1.061 1.06-.53.53-.354.354-.53.53-1.06-1.06ZM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm6-5.5h2v1.5h-2v-1.5Zm-13.25 0H0v1.5h2v-1.5H.75Zm1.62 5.32-.53.53 1.06 1.06.53-.53.354-.353.53-.53-1.06-1.061-.53.53-.354.354Zm10.2 1.06.53.53 1.06-1.06-.53-.53-.354-.354-.53-.53-1.06 1.06.53.53.353.354ZM8.75 14v2h-1.5v-2h1.5Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
    <path d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z" />
  </svg>
);


// --- MAIN PAGE --- //
export default function Home() {
  const [theme, setTheme] = useState('light'); // Default to light theme
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [selectedRecipe, setSelectedRecipe] = useState(content.ko.recipes[0]);

  useEffect(() => {
    // Detect system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme = prefersDark.matches ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Listen for changes in system theme preference
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    prefersDark.addEventListener('change', handleChange);

    return () => {
      prefersDark.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const currentRecipeName = selectedRecipe.name;
    const newLangRecipes = content[language].recipes;
    const newSelectedRecipe = newLangRecipes.find(r => r.name === currentRecipeName) || newLangRecipes[0];
    setSelectedRecipe(newSelectedRecipe);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'ko' ? 'en' : 'ko');

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative h-screen">
        <video src="/intro.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'var(--overlay-background)', zIndex: 10 }}></div>
        <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-30 bg-[var(--background)] text-[var(--foreground)]">
          <button onClick={() => window.location.reload()} className="text-3xl font-bold cursor-pointer bg-transparent border-none">{c.title}</button>
          <nav className="flex items-center gap-2">
            <button onClick={() => handleNavClick('product')} className="text-lg font-medium px-4 py-2 rounded-md hover:bg-[var(--card-hover-background)] transition-colors">{c.nav.product}</button>
            <button onClick={() => handleNavClick('recipe')} className="text-lg font-medium px-4 py-2 rounded-md hover:bg-[var(--card-hover-background)] transition-colors">{c.nav.recipe}</button>
            <button onClick={() => handleNavClick('contact')} className="text-lg font-medium px-4 py-2 rounded-md hover:bg-[var(--card-hover-background)] transition-colors">{c.nav.contact}</button>
            <button onClick={toggleTheme} className="ml-4 p-2 rounded-full hover:bg-[var(--card-hover-background)] transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={toggleLanguage} className="p-2 px-4 rounded-full hover:bg-[var(--card-hover-background)] transition-colors text-lg font-semibold" aria-label="Toggle language">
              {language === 'ko' ? 'English' : '한국어'}
            </button>
          </nav>
        </header>
        <main className="relative z-20 flex flex-col items-center justify-center h-full text-center px-8">
          <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight text-white">{c.hero.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl md:text-3xl text-[var(--text-accent)] max-w-3xl mx-auto">{c.hero.subtitle}</motion.p>
        </main>
      </div>

      <section id="product" className="py-24 bg-[var(--card-background)]">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}><img src="/product.png" alt="Product" className="rounded-lg shadow-2xl" /></motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--foreground)]">{c.product.title}</h3>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed">{c.product.description}</p>
          </motion.div>
        </div>
      </section>

      <section id="recipe" className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-8">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--foreground)]">{c.recipe.title}</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 h-[600px] overflow-y-auto pr-4">
              <ul className="space-y-4">
                {c.recipes.map((recipe) => (
                  <li key={recipe.name}>
                    <button onClick={() => setSelectedRecipe(recipe)} className={`w-full text-left text-xl p-4 rounded-lg transition-colors ${selectedRecipe.name === recipe.name ? 'bg-[var(--button-primary)] text-[var(--text-primary)]' : 'bg-[var(--card-background)] hover:bg-[var(--card-hover-background)]'}`}>{recipe.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div key={selectedRecipe.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-[var(--card-background)] p-8 rounded-lg shadow-2xl">
                  <img src="/recipe.png" alt={selectedRecipe.name} className="w-full h-64 object-cover rounded-lg mb-8" />
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)]">{selectedRecipe.name}</h4>
                  <div className="text-left">
                    <h5 className="text-2xl font-bold mb-3 text-[var(--text-accent)]">{c.recipe.ingredients}</h5>
                    <ul className="list-disc list-inside mb-6 text-lg text-[var(--foreground-muted)]">{selectedRecipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
                    <h5 className="text-2xl font-bold mb-3 text-[var(--text-accent)]">{c.recipe.instructions}</h5>
                    <ol className="list-decimal list-inside mb-6 text-lg text-[var(--foreground-muted)] space-y-2">{selectedRecipe.instructions.map((item, index) => <li key={index}>{item}</li>)}</ol>
                    <h5 className="text-2xl font-bold mb-3 text-[var(--text-accent)]">{c.recipe.tips}</h5>
                    <p className="text-lg text-[var(--foreground-muted)]">{selectedRecipe.tips}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-[var(--card-background)]">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--foreground)]">{c.contact.title}</h3>
          <p className="text-2xl md:text-3xl text-[var(--foreground-muted)]">{c.contact.message}</p>
        </div>
      </section>

      <footer className="p-8 text-center text-[var(--foreground-muted)] bg-[var(--background)]">
        <p>{c.footer}</p>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
