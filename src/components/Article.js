function Article ({title, date= "January 1, 1970", preview,minutes}){

    const emoji = minutes < 30 
    ? '☕️'.repeat(Math.ceil(minutes / 5)) 
    : '🍱'.repeat(Math.ceil(minutes / 10));
  
  const readingTime = `${emoji} ${minutes} min read`;
    return (
        <article>
        <h3>{title}</h3>
        <small>{date}.{readingTime}</small>
        <p>{preview}</p>
    </article>
    )   
}

export default Article;