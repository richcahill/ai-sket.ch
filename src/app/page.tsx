import Generator from "@/components/generator";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen container mx-auto flex-col items-stretch justify-start p-2">
      <nav className="flex justify-between p-4">
        <a href="/">
          <Logo className="h-5" />
        </a>
        <div>
          <a
            href="https://richmak.es"
            className=" fill-black hover:fill-black/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 hover:rotate-180 transition-all duration-200"
              viewBox="0 0 41 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.7096 0.844925L5.92977 19.6247C5.69592 19.8586 5.52782 20.1499 5.44242 20.4694L1.05275 36.8895C0.678851 38.2881 1.95821 39.5675 3.35682 39.1936L19.777 34.804C20.0965 34.7186 20.3878 34.5505 20.6216 34.3166L39.4015 15.5368C39.8756 15.0627 40.1248 14.4089 40.0866 13.7395L39.7283 7.45707C39.6955 6.88043 39.4516 6.33604 39.0432 5.92763L34.3188 1.20322C33.9103 0.794809 33.366 0.550927 32.7893 0.51804L26.5069 0.159746C25.8375 0.121571 25.1837 0.370836 24.7096 0.844925ZM28.9645 7.6991L32.5474 11.282C32.874 11.6086 33.3094 11.8037 33.7706 11.8301L36.8706 12.0074C37.1512 12.0235 37.3832 11.7915 37.3672 11.5109L37.1904 8.41041C37.164 7.9491 36.9689 7.51358 36.6422 7.18686L33.0593 3.60399C32.7327 3.27734 32.2973 3.08224 31.8361 3.05586L28.7361 2.87852C28.4555 2.86247 28.2235 3.09441 28.2395 3.37502L28.4164 6.47555C28.4427 6.93687 28.6378 7.37238 28.9645 7.6991ZM31.7893 8.45705C32.94 9.60776 34.3281 10.0854 34.8896 9.52379C35.4512 8.96223 34.9736 7.57416 33.8229 6.42345C32.6722 5.27274 31.2841 4.79515 30.7225 5.35671C30.161 5.91827 30.6386 7.30634 31.7893 8.45705ZM32.7266 14.4961C32.8071 14.4155 32.9182 14.3731 33.032 14.3796L36.6467 14.5838C36.8192 14.5935 36.899 14.8027 36.7769 14.9249L19.0698 32.632C18.9787 32.723 18.8497 32.7645 18.7241 32.736C18.4695 32.6784 17.9913 32.5526 17.3985 32.3143C16.8 32.0737 16.2429 31.7984 15.9403 31.6428C15.8215 31.5818 15.7986 31.424 15.8931 31.3296L32.7266 14.4961ZM25.743 7.51255C25.8236 7.43199 25.866 7.3209 25.8595 7.20715L25.6553 3.59239C25.6456 3.41987 25.4364 3.34007 25.3142 3.46225L7.58266 21.1938C7.49038 21.2861 7.44919 21.4175 7.47943 21.5445C7.53978 21.7977 7.66935 22.2724 7.9111 22.8822C8.1567 23.5017 8.43568 24.0317 8.59361 24.315C8.65672 24.4282 8.80876 24.4468 8.9004 24.3552L25.743 7.51255ZM26.8576 9.91759C27.0413 9.73386 27.3392 9.73386 27.5229 9.91759L30.3289 12.7235C30.5126 12.9073 30.5126 13.2052 30.3289 13.3889L13.8907 29.827C13.729 29.9887 13.4753 30.01 13.295 29.8694C12.9568 29.6057 12.3826 29.1323 11.7484 28.4981C11.1168 27.8664 10.6413 27.2977 10.3745 26.9614C10.2311 26.7807 10.2511 26.5241 10.4142 26.361L26.8576 9.91759ZM6.79154 26.1303C7.12306 26.7487 8.13133 28.4711 9.95327 30.293C11.7746 32.1144 13.5172 33.1194 14.1444 33.4499C14.2271 33.4935 14.2132 33.6206 14.1228 33.6447L9.37514 34.9112C6.92316 35.5653 4.6813 33.3224 5.33646 30.8707L6.5973 26.1525C6.62134 26.0626 6.74756 26.0483 6.79154 26.1303Z"
              />
            </svg>
          </a>
        </div>
      </nav>

      <Generator />
    </main>
  );
}
