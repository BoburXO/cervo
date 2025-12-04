export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/services/batteries',
      permanent: false
    }
  }
}

export default function ServicesRedirect() {
  return null
}
