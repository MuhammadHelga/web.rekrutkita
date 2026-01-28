import React from 'react'

function ChatInput({ value, onChange, onSend }) {
  return (
    <div className='bg-[#F9F9F9] px-4 py-3 flex gap-3 '>
        <input
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='Tulis Jawaban...'
          className="flex-1 px-4 py-3 rounded-xl outline-none bg-white"
        />
        <button 
          onClick={onSend}
          className='bg-[#FEBD5A] px-6 py-3 rounded-xl text-white font-semibold hover:bg-[#e6a845]'
        >
          Kirim
        </button>
    </div>
  )
}

export default ChatInput
