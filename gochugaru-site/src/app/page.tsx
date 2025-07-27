"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [generatedText, setGeneratedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGeneratedText = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/generate-text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: '고추가루 판매 사이트의 메인 슬로건을 50자 이내로 작성해줘.' }),
        });
        const data = await response.json();
        if (response.ok) {
          setGeneratedText(data.text);
        } else {
          console.error('Error:', data.error);
          setGeneratedText('텍스트 생성에 실패했습니다.');
        }
      } catch (error) {
        console.error('Failed to fetch generated text:', error);
        setGeneratedText('텍스트 생성 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedText();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-red-50">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-red-800 mb-8 text-center leading-tight"
      >
        고추가루 홍보 사이트
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl text-red-600 text-center max-w-2xl"
      >
        {loading ? '텍스트 생성 중...' : generatedText}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12"
      >
        {/* 여기에 고추가루 관련 이미지 또는 아이콘 추가 예정 */}
        <img src="/chili-pepper.svg" alt="Chili Pepper" className="w-32 h-32 animate-bounce" />
      </motion.div>
    </main>
  );
}
